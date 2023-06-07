import { Alumno } from '../models/Alumnos.js';
import { Inscripcion } from '../models/Inscripciones.js';

export const getInscripciones = async (req, res) => {
  try {
    const inscripciones = await Inscripcion.findAll();
    res.json(inscripciones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getInscripcion = async (req, res) => {
  const { id } = req.params;
  try {
    const inscripcion = await Inscripcion.findOne({
      where: {
        idInscripcion: id,
      },
    });
    res.json(inscripcion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createInscripcion = async (req, res) => {
  const { alumnoId, cursoId } = req.body;
  try {
    const newInscripcion = await Inscripcion.create({
      alumnoId,
      cursoId,
    });
    res.json(newInscripcion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateInscripcion = async (req, res) => {
  const { id } = req.params;
  const { alumnoId, cursoId } = req.body;

  try {
    const inscripcion = await Inscripcion.findByPk(id);
    inscripcion.alumnoId = alumnoId;
    inscripcion.cursoId = cursoId;

    await inscripcion.save();
    res.json(inscripcion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteInscripcion = async (req, res) => {
  const { id } = req.params;

  try {
    const inscripcion = await Inscripcion.findOne({
      where: {
        idInscripcion: id,
      },
    });

    await inscripcion.destroy();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Relaciones

export const getInscripcionAlumno = async (req, res) => {
  const { id } = req.params;
  try {
    const alumnos = await Inscripcion.findAll({
      where: { alumnoId: id },
    });
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getInscripcionCurso = async (req, res) => {
  const { id } = req.params;
  try {
    const cursos = await Inscripcion.findAll({
      where: { cursoId: id },
    });
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
