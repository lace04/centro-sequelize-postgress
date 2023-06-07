import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize';

export const Curso = sequelize.define('Cursos', {
  idCurso: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Descripcion: {
    type: DataTypes.STRING,
  },
  Temario: {
    type: DataTypes.STRING,
  },
  Codigo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Creditos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
