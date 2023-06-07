import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize';
import { Alumno } from './Alumnos.js';
import { Rol } from './Roles.js';
// import { Recuperacion_Password } from './Recuperacion_Password.js';

export const Usuario = sequelize.define(
  'Usuarios',
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Usuario: {
      type: DataTypes.STRING,
    },
    Password: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
    },
    RolId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    AlumnoId: {
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

Usuario.belongsTo(Alumno, { foreignKey: 'AlumnoId' }); // 1:1 (1 usuario tiene 1 alumno)

Usuario.belongsTo(Rol, { foreignKey: 'RolId' }); // 1:1 (1 usuario tiene 1 rol)

// Usuario.hasMany(Recuperacion_Password, { foreignKey: 'UsuarioId' });  // 1:N (1 usuario puede tener muchas recuperaciones de contraseña)