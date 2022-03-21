import * as express from 'express';
import CpfController from '../controllers/cpf';
import VerifyCpf from '../middlewares/verifyCpf';

const cpfRouter = express.Router()

cpfRouter.post('/cpf', VerifyCpf.verify, CpfController.validate);

export default cpfRouter