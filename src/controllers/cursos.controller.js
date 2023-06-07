import { Curso } from '../models/Cursos.js';

export const getCursos = async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCurso = async (req, res) => {
  const { id } = req.params;
  try {
    const curso = await Curso.findOne({
      where: {
        idCurso: id,
      },
    });
    res.json(curso);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCurso = async (req, res) => {
  const { Nombre, Descripcion, Temario, Codigo, Creditos } = req.body;

  try {
    const newCurso = await Curso.create({
      Nombre,
      Descripcion,
      Temario,
      Codigo,
      Creditos,
    });

    res.json(newCurso);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCurso = async (req, res) => {
  const { id } = req.params;
  const { Nombre, Descripcion, Temario, Codigo, Creditos } = req.body;

  try {
    const curso = await Curso.findOne({
      where: {
        idCurso: id,
      },
    });

    curso.Nombre = Nombre;
    curso.Descripcion = Descripcion;
    curso.Temario = Temario;
    curso.Codigo = Codigo;
    curso.Creditos = Creditos;

    await curso.save();

    res.json(curso);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCurso = async (req, res) => {
  const { id } = req.params;
  try {
    const curso = await Curso.findOne({
      where: {
        idCurso: id,
      },
    });

    await curso.destroy();

    res.json({ message: 'Curso deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
