import { type MultaCreateDTO, type Multa } from "../schemas/multa.schema";
import { prisma } from "../prisma";
import createHttpError from "http-errors";

export async function list(multaData: Partial<Multa> = {}): Promise<Multa[]> {
  const multas = await prisma.multa.findMany({
    select: {
      id: true,
      tipo: true,
      valor: true,
      pontos: true,
      placa_carro:true,
      data:true,
    },
    where: {
      ...multaData,
    },
  });

  return multas;
}

export async function findMultasByCarro(placa_carro: string): Promise<Multa[]> {
  const multas = await prisma.multa.findMany({
    where: {
      placa_carro,
    },
    select: {
      id: true,
      tipo: true,
      valor: true,
      pontos: true,
      placa_carro:true,
      data:true,
    },
  });

  return multas;
}

export async function findMultaById(id: number): Promise<Multa | null> {
  const multa = await prisma.multa.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      tipo: true,
      valor: true,
      pontos: true,
      placa_carro:true,
      data:true,
    },
  });

  if (multa === null) {
    throw new createHttpError.NotFound("Multa not found");
  }

  return multa;
}

export async function createMulta(multaData: MultaCreateDTO): Promise<Multa> {
  const multa = await prisma.multa.create({
    data: {
      ...multaData,
    },
    select: {
      id: true,
      tipo: true,
      valor: true,
      pontos: true,
      placa_carro:true,
      data:true,
    },
  });

  return multa;
}

export async function updateMulta(id: number, multaData: MultaCreateDTO): Promise<Multa> {
  const multa = await prisma.multa.update({
    where: {
      id,
    },
    data: {
      ...multaData,
    },
    select: {
      id: true,
      tipo: true,
      valor: true,
      pontos: true,
      placa_carro:true,
      data:true,
    },
  });

  return multa;
}

export async function deleteMulta(id: number): Promise<void> {
  await prisma.multa.delete({
    where: {
      id,
    },
  });
}
