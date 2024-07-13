import { z } from "zod";

export const InfracaoEnum = z.enum([
  "Velocidade acima da máxima permitida",
  "Estacionar em local proibido",
  "Dirigir utilizando o celular",
  "Dirigir sob efeito de álcool",
  "Não utilizar cinto de segurança",
  "Avançar o sinal vermelho",
]);


export const MultaSchema = z.object({
  id: z.number().int().positive(),
  valor: z.number().min(0).max(999999.99), 
  pontos: z.number().int().positive(),
  data: z.date(),
  tipo: InfracaoEnum,
  placa_carro: z.string().max(7),
});

export const MultaCreateSchema = z.object({
  valor: z.number().min(0).max(999999.99), 
  pontos: z.number().int().positive(),
  data: z.date(),
  tipo: InfracaoEnum,
  placa_carro: z.string().max(7),
});

export type MultaCreateDTO = z.infer<typeof MultaCreateSchema>;

export const MultaIdSchema = z.coerce.number().int().positive();

export type Multa = z.infer<typeof MultaSchema>;
export type MultaCreate = z.infer<typeof MultaCreateSchema>;
export type MultaId = z.infer<typeof MultaIdSchema>;
