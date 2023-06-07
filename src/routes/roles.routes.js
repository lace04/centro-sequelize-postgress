import { Router } from 'express';
import {
  getRoles,
  getRol,
  createRol,
  updateRol,
  deleteRol,
} from '../controllers/roles.controller.js';

const router = Router();

router.get('/rol', getRoles);
router.get('/rol/:id', getRol);
router.post('/rol', createRol);
router.put('/rol/:id', updateRol);
router.delete('/rol/:id', deleteRol);

export default router;
