import { Usuario } from '../models/Usuarios.js';
import { Rol } from '../models/Roles.js';
import config from '../config.js';
import jwt from 'jsonwebtoken';

// controlador para iniciar sesión
export const signIn = async (req, res) => {
  try {
    const usuarioFound = await Usuario.findOne({
      where: { usuario: req.body.usuario },
      include: Rol,
    });

    if (!usuarioFound) {
      return res
        .status(400)
        .json({ message: 'Usuario no encontrado o contraseña incorrecta' });
    }

    const matchPassword = await Usuario.comparePassword(
      req.body.password,
      usuarioFound.password
    );

    if (!matchPassword) {
      return res
        .status(401)
        .json({ token: null, message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ id: usuarioFound.idUsuario }, config.SECRET, {
      expiresIn: 86400, // 24 horas
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
