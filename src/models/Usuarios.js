import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize';
import { Alumno } from './Alumnos.js';
import { Rol } from './Roles.js';
import { Recuperacion_Password } from './Recuperacion_Password.js';

export const Usuario = sequelize.define(
  'Usuarios',
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuario: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    rolId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    alumnoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // references: {
      //   model: "Alumnos",
      //   key: "id",
      // },
      // onDelete: "CASCADE",
      // onUpdate: "CASCADE",
    },
  }
);

Usuario.belongsTo(Alumno, { foreignKey: 'alumnoId' }); // 1:1 (1 usuario tiene 1 alumno)

Usuario.belongsTo(Rol, { foreignKey: 'rolId' }); // 1:1 (1 usuario tiene 1 rol)

Usuario.hasMany(Recuperacion_Password, { foreignKey: 'usuarioId' });  // 1:N (1 usuario puede tener muchas recuperaciones de contraseña)