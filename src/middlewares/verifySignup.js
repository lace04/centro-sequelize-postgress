import { Rol } from '../models/Roles.js';
import { Usuario } from '../models/Usuarios.js';

//sequelize
export const checkRolesExisted = async (req, res, next) => {
  try {
    const { rolId } = req.body;

    if (rolId) {
      const roles = await Rol.findAll({
        where: {
          idRol: rolId,
        },
      });

      if (roles.length === 0) {
        return res.status(400).json({
          message: `The role with ID ${rolId} does not exist.`,
        });
      }
    }

    next();
  } catch (error) {
    console.log(error, 'error');
  }
};

//sequelize

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const { usuario, email } = req.body;

    const user = await Usuario.findOne({
      where: {
        usuario: usuario,
      },
    });

    if (user)
      return res.status(400).json({ message: 'The user already exists' });

    const emailFound = await Usuario.findOne({
      where: {
        email: email,
      },
    });

    if (emailFound)
      return res.status(400).json({ message: 'The email already exists' });

    next();
  } catch (error) {
    console.log(error, 'error');
  }
};
