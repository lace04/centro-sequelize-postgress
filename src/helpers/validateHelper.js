import { validationResult } from 'express-validator';

export const validateHelper = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403).json({ errors: error.array() });
  }
};
