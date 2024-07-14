import { z } from "zod";

export const CarroSchema = z.object({
  marca: z.string().max(100),
  modelo: z.string().max(100),
  ano: z.string().transform(value => parseInt(value, 10)),
  cor: z.string().max(50),
  placa: z.string().max(7),
  cpf: z.string().max(11),
});

export const CarroIdSchema = z.string().max(7);

export type Carro = z.infer<typeof CarroSchema>;
export type CarroId = z.infer<typeof CarroIdSchema>;
