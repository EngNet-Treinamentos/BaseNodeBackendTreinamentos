import { z } from "zod";

export const MotoristaSchema = z.object({
  nome: z.string().max(50),
  cpf: z.string().max(15),
  categoria_cnh: z.number().int().positive(),
  vencimento_cnh: z.string().max(10),
});

export const MotoristaIdSchema = z.string().max(15);

export type Motorista = z.infer<typeof MotoristaSchema>;
export type MotoristaId = z.infer<typeof MotoristaIdSchema>;
