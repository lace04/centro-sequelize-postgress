import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize';

export const Curso = sequelize.define('Cursos', {
  idCurso: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  temario: {
    type: DataTypes.STRING,
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  creditos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
