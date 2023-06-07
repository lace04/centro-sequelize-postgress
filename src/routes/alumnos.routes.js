import { Router } from 'express';
import {
  getAlumnos,
  getAlumno,
  createAlumno,
  updateAlumno,
  deleteAlumno,
} from '../controllers/alumnos.controller.js';

const router = Router();

router.get('/alumnos', getAlumnos);
router.get('/alumnos/:id', getAlumno);
router.post('/alumnos', createAlumno);
router.put('/alumnos/:id', updateAlumno);
router.delete('/alumnos/:id', deleteAlumno);

export default router;
