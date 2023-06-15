import { Rol } from '../models/Roles.js';
import { Alumno } from '../models/Alumnos.js';

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

export const initialAlumno = async () => {
  try {
    const count = await Alumno.count();

    if (count > 0) return;

    const values = await Promise.all([
      Alumno.create({
        nif: 'EST-001',
        primerNombre: 'Luis',
        segundoNombre: 'Alberto',
        primerApellido: 'Cifuentes',
        segundoApellido: 'Escobar',
        email: 'student@email.com',
      }),
    ]);
  } catch (error) {
    console.log(error);
  }
};
