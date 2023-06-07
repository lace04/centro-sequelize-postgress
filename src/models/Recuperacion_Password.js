import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize';
import { Usuario } from './Usuarios.js';

export const Recuperacion_Password = sequelize.define(
  'Recuperacion_Passwords',
  {
    idRec_Pass: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
    },
  }
);

// Usuario.belongsTo(Usuario, { foreignKey: 'idUsuario' });  // 1:N (1 usuario puede tener muchas recuperaciones de contraseña)
