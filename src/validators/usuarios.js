import { check } from 'express-validator';
import { Usuario } from '../models/Usuarios.js';
import { validateHelper } from '../helpers/validateHelper.js';

export const validateCreate = [
  check('usuario')
    .notEmpty()
    .exists()
    .withMessage('El usuario es obligatorio')
    .isLength({ min: 7 })
    .withMessage('El usuario debe tener al menos 7 caracteres')
    .isLength({ max: 15 })
    .withMessage('El usuario debe tener como máximo 15 caracteres'),

  check('password')
    .notEmpty()
    .exists()
    .withMessage('La contraseña es obligatoria')
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres')
    .isLength({ max: 15 })
    .withMessage('La contraseña debe tener como máximo 15 caracteres'),

  check('email')
    .notEmpty()
    .exists()
    .isEmail()
    .withMessage('El email es obligatorio')
    .custom(async (email) => {
      const usuario = await Usuario.findOne({ where: { email } });
      if (usuario) {
        throw new Error('El email ya está en uso');
      }
    }),

  check('rolId')
    .notEmpty()
    .exists()
    .isNumeric()
    .withMessage('El rol es obligatorio')
    .custom((value, { req }) => {
      //my rol are 2
      if (value > 2) {
        throw new Error('El rol no existe');
      }
    }),

  check('alumnoId')
    .notEmpty()
    .exists()
    .isNumeric()
    .withMessage('El alumno es obligatorio'),

  (req, res, next) => {
    validateHelper(req, res, next);
  },
];
