import { Router } from 'express';
import {
  getAlumnos,
  getAlumno,
  createAlumno,
  updateAlumno,
  deleteAlumno,
} from '../controllers/alumnos.controller.js';
import { verifyToken, isAdmin, isStudent } from '../middlewares/authJwt.js';

const router = Router();

router.get('/alumnos', [verifyToken, isAdmin], getAlumnos);
router.get('/alumnos/:id', [verifyToken], getAlumno);
// router.post('/alumnos', [verifyToken, isAdmin], createAlumno);
router.post('/alumnos', createAlumno);
router.put('/alumnos/:id', [verifyToken, isAdmin], updateAlumno);
router.delete('/alumnos/:id', [verifyToken, isAdmin], deleteAlumno);

export default router;
