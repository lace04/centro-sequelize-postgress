import app from './app.js';
import { sequelize } from './database/database.js';
import './models/Usuarios.js';
import './models/Alumnos.js';
import './models/Cursos.js';
import './models/Inscripciones.js';
import './models/Roles.js';
import './models/Recuperacion_Password.js';

async function main() {
  try {
    await sequelize.sync({ alter: false });
    console.log('Connection has been established successfully.');
    app.listen(3000);
    console.log('Server on port 3000');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();
