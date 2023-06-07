import { Usuario } from '../models/Usuarios.js';

// controlador para registrarse
export const signUp = async (req, res) => {
  const { usuario, password, email, rolId, alumnoId } = req.body;
  res.json('signup');
};

// controlador para iniciar sesion
export const signIn = async (req, res) => {
  res.json('signin');
};
