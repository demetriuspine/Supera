import { validate } from 'gerador-validador-cpf';

export default class CpfService {
  static validate(cpf: string) {
    const isCpfValid: boolean = validate(cpf);
    return isCpfValid;
  }
}
