import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import expressRateLimit from 'express-rate-limit';

import rolesRoutes from './routes/roles.routes.js';
import inscripcionesRoutes from './routes/inscripciones.routes.js';
import cursosRoutes from './routes/cursos.routes.js';
import alumnosRoutes from './routes/alumnos.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';
import recPassRoutes from './routes/recPass.routes.js';
import authRoutes from './routes/auth.routes.js';
//Roles
import { createRoles } from './libs/initialSetup.js';
import { initialAlumno } from './libs/initialSetup.js';

const app = express();

//middlewares
app.use(express.json());
createRoles();
initialAlumno();
app.use(morgan('dev'));
app.use(helmet());

app.use(expressRateLimit({
  max: 10,
  windowMs: 1000,
}));

app.use('/api', rolesRoutes);
app.use('/api', inscripcionesRoutes);
app.use('/api', cursosRoutes);
app.use('/api', alumnosRoutes);
app.use('/api', usuariosRoutes);
app.use('/api', recPassRoutes);
app.use('/api', authRoutes);

export default app;
