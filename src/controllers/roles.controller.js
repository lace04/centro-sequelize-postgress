import { Rol } from '../models/Roles.js';

export const getRoles = async (req, res) => {
  try {
    const roles = await Rol.findAll();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRol = async (req, res) => {
  const { id } = req.params;
  try {
    const rol = await Rol.findOne({
      where: {
        idRol: id,
      },
    });
    res.json(rol);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createRol = async (req, res) => {
  const { nombre } = req.body;
  try {
    const newRol = await Rol.create({
      nombre,
    });

    res.json(newRol);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateRol = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;

  try {
    const rol = await Rol.findOne({
      where: {
        idRol: id,
      },
    });

    rol.nombre = nombre;

    await rol.save();

    res.json(rol);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRol = async (req, res) => {
  const { id } = req.params;

  try {
    const rol = await Rol.findOne({
      where: {
        idRol: id,
      },
    });

    await rol.destroy();

    res.json({
      message: 'Rol eliminado satisfactoriamente',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
