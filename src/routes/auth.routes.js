import { Router } from 'express';
import { signIn } from '../controllers/auth.controller.js';

const router = Router();

// ruta para iniciar sesion
router.post('/signin', signIn);

export default router;
