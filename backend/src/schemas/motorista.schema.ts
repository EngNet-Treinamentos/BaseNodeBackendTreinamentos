import { z } from "zod";

const CategoriaCNHEnum = z.enum(["AB", "A", "B"]);

export const MotoristaSchema = z.object({
  nome: z.string().max(100),
  cpf: z.string().length(11),
  categoria_cnh: z.string().max(100),
  vencimento_cnh: z.string().transform((str) => new Date(str))
});

export const MotoristaIdSchema = z.string().length(11);


export type Motorista = z.infer<typeof MotoristaSchema>;
export type MotoristaId = z.infer<typeof MotoristaIdSchema>;
