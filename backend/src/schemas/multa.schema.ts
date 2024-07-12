import { z } from "zod";

export const MultaSchema = z.object({
  id: z.number().int().positive(),
  valor: z.number().int().positive(),
  pontos: z.number().int().positive(),
  data: z.string().max(10),
  tipo: z.string().max(80),
  placa_carro: z.string().max(7),
});

export const MultaCreateSchema = z.object({
  valor: z.number().int().positive(),
  pontos: z.number().int().positive(),
  data: z.string().max(10),
  tipo: z.string().max(80),
  placa_carro: z.string().max(7),
});

export type MultaCreateDTO = z.infer<typeof MultaCreateSchema>;

export const MultaIdSchema = z.coerce.number().int().positive();

export type Multa = z.infer<typeof MultaSchema>;
export type MultaCreate = z.infer<typeof MultaCreateSchema>;
export type MultaId = z.infer<typeof MultaIdSchema>;
