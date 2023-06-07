import { Router } from 'express';
import { signUp, signIn } from '../controllers/auth.controller.js';

const router = Router();

// ruta para registrarse
router.post('/signup', signUp);

// ruta para iniciar sesion
router.post('/signin', signIn);

export default router;
