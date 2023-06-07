import { Router } from 'express';
import {
  getRecPassAll,
  getRecPass,
  createRecPass,
  updateRecPass,
  deleteRecPass,
} from '../controllers/recPass.controller.js';

const router = Router();

router.get('/recpass', getRecPassAll);
router.get('/recpass/:id', getRecPass);
router.post('/recpass', createRecPass);
router.put('/recpass/:id', updateRecPass);
router.delete('/recpass/:id', deleteRecPass);

export default router;
