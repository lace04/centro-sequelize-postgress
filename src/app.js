import express from 'express';
import morgan from 'morgan';

import rolesRoutes from './routes/roles.routes.js';
import inscripcionesRoutes from './routes/inscripciones.routes.js';
import cursosRoutes from './routes/cursos.routes.js';
import alumnosRoutes from './routes/alumnos.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';
import recPassRoutes from './routes/recPass.routes.js';

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

app.use(rolesRoutes);
app.use(inscripcionesRoutes);
app.use(cursosRoutes);
app.use(alumnosRoutes);
app.use(usuariosRoutes);
app.use(recPassRoutes);

export default app;
