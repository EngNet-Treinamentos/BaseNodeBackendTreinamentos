import { type MultaCreateDTO, type Multa } from "../schemas/multa.schema";
import { prisma } from "../prisma";
import createHttpError from "http-errors";

export async function list(multaData: Partial<Multa> = {}): Promise<Multa[]> {
  const multas = await prisma.multa.findMany({
    select: {
      id: true,
      description: true,
      value: true,
    },
    where: {
      ...multaData,
    },
  });

  return multas;
}

export async function findMultasByMotoristaCpf(motoristaCpf: string): Promise<Multa[]> {
  const multas = await prisma.multa.findMany({
    where: {
      motoristaCpf,
    },
    select: {
      id: true,
      description: true,
      value: true,
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
      description: true,
      value: true,
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
      description: true,
      value: true,
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
      description: true,
      value: true,
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
