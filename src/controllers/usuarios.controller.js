import { Usuario } from '../models/Usuarios.js';

export const getUsuarios = async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
};

export const getUsuario = async (req, res) => {
  const { id } = req.params;
  const usuario = await Usuario.findOne({
    where: {
      idUsuario: id,
    },
  });
  res.json(usuario);
};

export const createUsuario = async (req, res) => {
  const { usuario, password, email, rolId, alumnoId } = req.body;
  try {
    const newUsuario = await Usuario.create({
      usuario,
      password,
      email,
      rolId,
      alumnoId,
    });
    res.json(newUsuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { usuario, password, email, rolId, alumnoId } = req.body;

  try {
    const UpdatedUsuario = await Usuario.findByPk(id);
    UpdatedUsuario.usuario = usuario;
    UpdatedUsuario.password = password;
    UpdatedUsuario.email = email;
    UpdatedUsuario.rolId = rolId;
    UpdatedUsuario.alumnoId = alumnoId;

    await UpdatedUsuario.save();
    res.json(UpdatedUsuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findOne({
      where: {
        idUsuario: id,
      },
    });
    await usuario.destroy();
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//relaciones

export const getUsuarioRol = async (req, res) => {
  const { id } = req.params;
  try {
    const rol = await Usuario.findAll({
      where: { rolId: id },
    });
    res.json(rol);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUsuarioAlumno = async (req, res) => {
  const { id } = req.params;
  try {
    const alumno = await Usuario.findAll({
      where: { alumnoId: id },
    });
    res.json(alumno);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
