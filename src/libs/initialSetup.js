import { Rol } from '../models/Roles.js';

export const createRoles = async () => {
  try {
    const count = await Rol.count();
    if (count > 0) return;

    const values = await Promise.all([
      Rol.create({ nombre: 'Administrador' }),
      Rol.create({ nombre: 'Estudiante' }),
    ]);

    console.log(values);
  } catch (error) {
    console.log(error);
  }
};
