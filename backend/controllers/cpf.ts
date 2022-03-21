import { Request, Response } from "express";
import CpfService from "../services/cpf";

export default class CpfController {
  static validate(req: Request, res: Response) {
    try {
      const { cpf } = req.body;
      const isCpfValid = CpfService.validate(cpf)
      return res.status(200).json({message: isCpfValid})
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}