import { z } from "zod";
import Decimal from 'decimal.js';


export const MultaSchema = z.object({
  id: z.number().int().positive(),
  valor: z.string().transform(value => new Decimal(value)),
  pontos: z.string().transform(value => parseInt(value, 10)),
  data: z.string().transform((str) => new Date(str)),
  tipo: z.string().max(100),
  placa_carro: z.string().max(7),
});

export const MultaCreateSchema = z.object({
  valor: z.string().transform(value => new Decimal(value)),
  pontos: z.string().transform(value => parseInt(value, 10)),
  data: z.string().transform((str) => new Date(str)),
  tipo: z.string().max(100),
  placa_carro: z.string().max(7),
});

export type MultaCreateDTO = z.infer<typeof MultaCreateSchema>;

export const MultaIdSchema = z.coerce.number().int().positive();

export type Multa = z.infer<typeof MultaSchema>;
export type MultaCreate = z.infer<typeof MultaCreateSchema>;
export type MultaId = z.infer<typeof MultaIdSchema>;