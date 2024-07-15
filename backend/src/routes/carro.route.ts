import { Router } from "express";
import { list, createCarro, findCarroByPlaca, updateCarro, deleteCarro, findCarrosByMotoristaCpf } from "../business/carro.business";
import createHttpError from "http-errors";
import { CarroIdSchema, CarroSchema, CarroCpfSchema } from "../schemas/carro.schema";

const router = Router();

router.get("/", async (req, res) => {
  const { userId } = req;
  const carroParams = req.query;

  const carros = await list(carroParams);

  return res.status(200).json(carros);
});

router.get("/cpf/:cpf", async (req, res) => {
  const cpf = CarroCpfSchema.parse(req.params.cpf);
  const carros = await findCarrosByMotoristaCpf(cpf);

  if (carros === null) {
    throw new createHttpError.NotFound("Carros not found");
  }

  return res.status(200).json(carros);
});

router.get("/:id", async (req, res) => {

  const placa = CarroIdSchema.parse(req.params.id);
  const carro = await findCarroByPlaca(placa);

  if (carro === null) {
    throw new createHttpError.NotFound("Carro not found");
  }

  return res.status(200).json(carro);
});

router.post("/", async (req, res) => {

  const carroData = CarroSchema.parse(req.body);
  console.log(carroData);

  const carro = await createCarro(carroData);

  return res.status(201).json(carro);
});

router.put("/:id", async (req, res) => {
  const { userId } = req;

  const placa = CarroIdSchema.parse(req.params.id);
  const carroData = CarroSchema.parse(req.body);

  await updateCarro({ ...carroData, placa });

  return res.status(204).send();
});

router.delete("/:id", async (req, res) => {
  const { userId } = req;

  const id = CarroIdSchema.parse(req.params.id);
  await deleteCarro(id);

  return res.status(204).send();
});

export default router;
