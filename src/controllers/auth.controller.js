import { Usuario } from '../models/Usuarios.js';
import { Rol } from '../models/Roles.js';
import config from '../config.js';
import jwt from 'jsonwebtoken';

// controlador para iniciar sesión
export const signIn = async (req, res) => {
  const usuarioFound = await Usuario.findOne({
    where: { usuario: req.body.usuario },
    include: Rol,
  });

  if (!usuarioFound) {
    return res
      .status(400)
      .json({ message: 'Usuario no encontrado o contraseña incorrecta' });
  }

  console.log(usuarioFound);

  const isPasswordValid = await Usuario.comparePassword(
    req.body.password,
    usuarioFound.password
  );

  if (!isPasswordValid) {
    return res
      .status(401)
      .json({ token: null, message: 'Contraseña incorrecta' });
  }

  //Si se cumple todo crear token

  const token = jwt.sign({ id: usuarioFound.idUsuario }, config.SECRET, {
    expiresIn: 86400, // 24 horas
  });

  res.json({ token });
};
