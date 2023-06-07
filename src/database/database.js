import Sequelize from 'sequelize';

export const sequelize = new Sequelize('centroformacion', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});
