import jwt from 'jsonwebtoken';
import config from '../config.js';
import { Usuario } from '../models/Usuarios.js';
import { Rol } from '../models/Roles.js';

export const verifyToken = async (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(403).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, config.SECRET);

    req.id = decoded.id;

    const userFound = await Usuario.findByPk(req.id, { password: 0 });

    if (!userFound) return res.status(404).json({ message: 'No user found' });

    next();
  } catch (error) {
    // console.log(error);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

// //sequelize
// export const isAdmin = async (req, res, next) => {
//   const userAdmin = await Usuario.findByPk(req.id);
//   await Rol.find
//   console.log(roles);
//   next();
// };

export const isAdmin = async (req, res, next) => {
  const userAdmin = await Usuario.findByPk(req.id);

  const roles = await Rol.findAll({
    where: {
      idRol: userAdmin.rolId,
    },
  });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].nombre === 'Administrador') {
      next();
      return;
    }
  }
  console.log(roles);
  return res.status(403).json({ message: 'Require Admin Role!' });
};

export const isStudent = async (req, res, next) => {
  const userStudent = await Usuario.findByPk(req.id);

  const roles = await Rol.findAll({
    where: {
      idRol: userStudent.rolId,
    },
  });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].nombre === 'Estudiante') {
      next();
      return;
    }
  }
  console.log(roles);
  return res.status(403).json({ message: 'Require Student Role!' });
};
