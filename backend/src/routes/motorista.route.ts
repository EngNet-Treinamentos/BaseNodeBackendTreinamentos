import { Router } from "express";
import {
  list,
  createMotorista,
  findMotoristaByCpf,
  updateMotorista,
  deleteMotorista,
} from "../business/motorista.business";
import { findCarroByMotoristaId } from "../business/carro.business";
import { findMultasByCarro} from "../business/multa.business";
import { MotoristaIdSchema, MotoristaSchema } from "../schemas/motorista.schema";
import createHttpError from "http-errors";

const router = Router();

router.get("/", async (req, res) => {
  

  const motoristaParams = req.query;

  const motoristas = await list(motoristaParams);

  return res.status(200).json(motoristas);
});

router.get("/:id", async (req, res) => {
  

  const cpf = MotoristaIdSchema.parse(req.params.id);
  const motorista = await findMotoristaByCpf(cpf);

  if (motorista === null) {
    throw new createHttpError.NotFound("Motorista not found");
  }

  return res.status(200).json(motorista);
});

router.get("/:id/carros", async (req, res) => {
 

  const id = MotoristaIdSchema.parse(req.params.id);
  const carros = await findCarroByMotoristaId(id);

  return res.status(200).json(carros);
});

//ajustar
router.get("/:id/multas", async (req, res) => {


  const placa = MotoristaIdSchema.parse(req.params.id);
  const multas = await findMultasByCarro(placa);

  return res.status(200).json(multas);
});

router.post("/", async (req, res) => {
  

  const motoristaData = MotoristaSchema.parse(req.body);
  const motorista = await createMotorista(motoristaData);

  return res.status(201).json(motorista);
});

router.put("/:id", async (req, res) => {
 

  const cpf = MotoristaIdSchema.parse(req.params.id);
  const motoristaData = MotoristaSchema.parse(req.body);

  const motorista = await updateMotorista({ ...motoristaData, cpf });

  return res.status(200).json(motorista);
});

router.delete("/:id", async (req, res) => {
  const { userId } = req;

  if (userId === undefined) {
    throw new createHttpError.Unauthorized("Usuário não autenticado");
  }

  const id = MotoristaIdSchema.parse(req.params.id);
  await deleteMotorista(id);

  return res.status(204).send();
});

export default router;
