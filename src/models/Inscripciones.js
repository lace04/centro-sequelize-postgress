import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize';
import { Alumno } from './Alumnos.js';
import { Curso } from './Cursos.js';

export const Inscripcion = sequelize.define('Inscripciones', {
  idInscripcion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  alumnoId: {
    type: DataTypes.INTEGER,
  },
  cursoId: {
    type: DataTypes.INTEGER,
  },
});

Inscripcion.belongsTo(Alumno, { foreignKey: 'alumnoId' }); // 1:1 (1 inscripcion tiene 1 alumno)

Inscripcion.belongsTo(Curso, { foreignKey: 'cursoId' }); // 1:1 (1 inscripcion tiene 1 curso)
