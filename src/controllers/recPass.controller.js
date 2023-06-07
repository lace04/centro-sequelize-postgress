import { Recuperacion_Password } from '../models/Recuperacion_Password.js';

export const getRecPassAll = async (req, res) => {
  try {
    const recPass = await Recuperacion_Password.findAll();
    res.json(recPass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRecPass = async (req, res) => {
  const { id } = req.params;

  try {
    const recPass = await Recuperacion_Password.findOne({
      where: {
        idRec_Pass: id,
      },
    });
    res.json(recPass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createRecPass = async (req, res) => {
  const { UsuarioId, Token } = req.body;

  try {
    const newRecPass = await Recuperacion_Password.create({
      UsuarioId,
      Token,
    });
    res.json(newRecPass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateRecPass = async (req, res) => {
  const { id } = req.params;
  const { UsuarioId, Token } = req.body;

  try {
    const recPass = await Recuperacion_Password.findOne({
      where: {
        idRec_Pass: id,
      },
    });
    recPass.UsuarioId = UsuarioId;
    recPass.Token = Token;

    await recPass.save();

    res.json(recPass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRecPass = async (req, res) => {
  const { id } = req.params;

  try {
    const recPass = await Recuperacion_Password.findOne({
      where: {
        idRec_Pass: id,
      },
    });

    await recPass.destroy();

    res.json({ message: 'Recuperacion_Password deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
