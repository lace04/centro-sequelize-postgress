import { Router } from 'express';
import {
  getUsuarios,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  getUsuarioRol,
  getUsuarioAlumno,
} from '../controllers/usuarios.controller.js';
import { checkRolesExisted, checkDuplicateUsernameOrEmail } from '../middlewares/verifySignup.js';

const router = Router();

router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuario);
router.post('/usuarios', [checkRolesExisted, checkDuplicateUsernameOrEmail], createUsuario);
router.put('/usuarios/:id', updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);

router.get('/usuarios/:id/roles', getUsuarioRol);
router.get('/usuarios/:id/alumnos', getUsuarioAlumno);

export default router;
