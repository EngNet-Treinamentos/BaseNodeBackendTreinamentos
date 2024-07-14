import { Router } from "express";
import { list, createMulta, findMultaById, updateMulta, deleteMulta } from "../business/multa.business";
import createHttpError from "http-errors";
import { MultaCreateSchema, MultaIdSchema } from "../schemas/multa.schema";

const router = Router();

router.get("/", async (req, res) => {
  
  const multaParams = req.query;

  const multas = await list(multaParams);

  return res.status(200).json(multas);
});

router.get("/:id", async (req, res) => {
  
  const id = MultaIdSchema.parse(req.params.id);
  const multa = await findMultaById(id);

  if (multa === null) {
    throw new createHttpError.NotFound("Multa not found");
  }

  return res.status(200).json(multa);
});

router.post("/", async (req, res) => {
  
  const multaData = MultaCreateSchema.parse(req.body);
  const multa = await createMulta(multaData);

  return res.status(201).json(multa);
});

router.put("/:id", async (req, res) => {
  
  const id = MultaIdSchema.parse(req.params.id);
  const multaData = MultaCreateSchema.parse(req.body);

  const multa = await updateMulta(id, multaData);

  return res.status(200).json(multa);
});

router.delete("/:id", async (req, res) => {
  
  const id = MultaIdSchema.parse(req.params.id);

  await deleteMulta(id);

  return res.status(204).send();
});

export default router;
