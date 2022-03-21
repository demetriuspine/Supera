import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export default class VerifyCpf {
  static verify(req: Request, res: Response, next: NextFunction) {
    const joiValidation = Joi.object(
      {
        cpf: Joi.string().min(11).max(11).required()
      }
    );
    const result = joiValidation.validate(req.body);

    if (result.error !== undefined) {
      const { error } = result;
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  }
}