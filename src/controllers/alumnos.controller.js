import { Alumno } from '../models/Alumnos.js';

export const getAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.findAll();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAlumno = async (req, res) => {
  const { id } = req.params;
  try {
    const alumno = await Alumno.findOne({
      where: {
        idAlumno: id,
      },
    });
    res.json(alumno);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createAlumno = async (req, res) => {
  const {
    nif,
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    email,
  } = req.body;
  try {
    const newAlumno = await Alumno.create({
      nif,
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      email,
    });

    res.json(newAlumno);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const updateAlumno = async (req, res) => {
//   const { id } = req.params;
//   const {
//     nif,
//     primerNombre,
//     segundoNombre,
//     primerApellido,
//     segundoApellido,
//     email,
//   } = req.body;

//   try {
//     const alumno = await Alumno.findOne({
//       where: {
//         idAlumno: id,
//       },
//     });

//     alumno.nif = nif;
//     alumno.primerNombre = primerNombre;
//     alumno.segundoNombre = segundoNombre;
//     alumno.primerApellido = primerApellido;
//     alumno.segundoApellido = segundoApellido;
//     alumno.email = email;

//     await alumno.save();

//     res.json(alumno);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const updateAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const alumno = await Alumno.findOne({
      where: { idAlumno: id },
    });
    alumno.set(req.body); // se actualizan los campos que vienen en el body de la petición PUT
    await alumno.save();

    return res.json({ alumno });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAlumno = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRowCount = await Alumno.destroy({
      where: {
        idAlumno: id,
      },
    });
    res.json({
      message: 'Alumno eliminado satisfactoriamente',
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
