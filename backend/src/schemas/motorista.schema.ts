import { z } from "zod";

const CategoriaCNHEnum = z.enum(["AB", "A", "B"]);

export const MotoristaSchema = z.object({
  nome: z.string().max(100),
  cpf: z.string().max(11),
  categoria_cnh: CategoriaCNHEnum,
  vencimento_cnh: z.date(),
});

export const MotoristaIdSchema = z.string().max(11);

export type Motorista = z.infer<typeof MotoristaSchema>;
export type MotoristaId = z.infer<typeof MotoristaIdSchema>;
