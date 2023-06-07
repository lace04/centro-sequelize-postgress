import express from 'express';
import morgan from 'morgan';

import rolesRoutes from './routes/roles.routes.js';
import inscripcionesRoutes from './routes/inscripciones.routes.js';
import cursosRoutes from './routes/cursos.routes.js';
import alumnosRoutes from './routes/alumnos.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';
import recPassRoutes from './routes/recPass.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

app.use('/api', rolesRoutes);
app.use('/api', inscripcionesRoutes);
app.use('/api', cursosRoutes);
app.use('/api', alumnosRoutes);
app.use('/api', usuariosRoutes);
app.use('/api', recPassRoutes);
app.use('/api/auth', authRoutes);

export default app;
