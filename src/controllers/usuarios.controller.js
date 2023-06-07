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
      Usuario: usuario,
      Password: password,
      Email: email,
      RolId: rolId,
      AlumnoId: alumnoId,
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
    UpdatedUsuario.Usuario = usuario;
    UpdatedUsuario.Password = password;
    UpdatedUsuario.Email = email;
    UpdatedUsuario.RolId = rolId;
    UpdatedUsuario.AlumnoId = alumnoId;

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
      where: { RolId: id },
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
      where: { AlumnoId: id },
    });
    res.json(alumno);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
