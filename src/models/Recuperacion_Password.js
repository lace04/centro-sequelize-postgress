import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize';

export const Recuperacion_Password = sequelize.define(
  'Recuperacion_Passwords',
  {
    idRec_Pass: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    UsuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Token: {
      type: DataTypes.STRING,
    },
  }
);
