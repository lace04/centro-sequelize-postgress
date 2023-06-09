import { Router } from 'express';
import {
  getCursos,
  createCurso,
  getCurso,
  updateCurso,
  deleteCurso,
} from '../controllers/cursos.controller.js';

const router = Router();

router.get('/cursos', getCursos);
router.get('/cursos/:id', getCurso);
router.post('/cursos', createCurso);
router.put('/cursos/:id', updateCurso);
router.delete('/cursos/:id', deleteCurso);

export default router;
