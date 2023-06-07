import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize';

export const Rol = sequelize.define('Roles', {
  idRol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
