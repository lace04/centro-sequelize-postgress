import { Router } from 'express';
import {
  getInscripciones,
  createInscripcion,
  getInscripcion,
  updateInscripcion,
  deleteInscripcion,
  getInscripcionAlumno,
  getInscripcionCurso,
} from '../controllers/inscripciones.controller.js';

const router = Router();

router.get('/inscripciones', getInscripciones);
router.get('/inscripciones/:id', getInscripcion);
router.post('/inscripciones', createInscripcion);
router.put('/inscripciones/:id', updateInscripcion);
router.delete('/inscripciones/:id', deleteInscripcion);

//Relaciones
router.get('/inscripciones/:id/alumnos', getInscripcionAlumno);
router.get('/inscripciones/:id/cursos', getInscripcionCurso);

export default router;
