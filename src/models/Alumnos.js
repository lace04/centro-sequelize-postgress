import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize';

export const Alumno = sequelize.define('Alumnos', {
  idAlumno: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nif: {
    type: DataTypes.STRING,
  },
  primerNombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  segundoNombre: {
    type: DataTypes.STRING,
  },
  primerApellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  segundoApellido: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});
