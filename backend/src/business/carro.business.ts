import { type Carro } from "../schemas/carro.schema";
import { prisma } from "../prisma";
import createHttpError from "http-errors";

export const list = async (carroData: Partial<Carro> = {}): Promise<Carro[]> => {
  const carros = await prisma.carro.findMany({
    select: {
      cpf: true,
      modelo: true,
      ano: true,
      placa: true,
      cor: true,
    },
    where: {
      ...carroData,
    },
  });

  return carros;
};

export const findCarroByMotoristaId = async (cpf: string): Promise<Carro | null> => {
  const carro = await prisma.carro.findFirst({
    where: {
      cpf,
    },
    select: {
      cpf: true,
      modelo: true,
      ano: true,
      placa: true,
      cor: true,
    },
  });

  if (carro === null) {
    throw new createHttpError.NotFound("Carro not found");
  }

  return carro;
};

export const findCarroByPlaca = async (placa: string): Promise<Carro | null> => {
  const carro = await prisma.carro.findFirst({
    where: {
      placa,
    },
    select: {
      cpf: true,
      modelo: true,
      ano: true,
      placa: true,
      cor: true,
    },
  });

  if (carro === null) {
    throw new createHttpError.NotFound("Carro not found");
  }

  return carro;
};

export const createCarro = async (carroData: Carro): Promise<Carro> => {
  const carro = await prisma.carro.create({
    data: {
      ...carroData,
    },
    select: {
      cpf: true,
      modelo: true,
      ano: true,
      placa: true,
      cor: true,
    },
  });

  return carro;
};

export const updateCarro = async ({ placa, ...carroData }: Carro): Promise<Carro> => {
  const carro = await prisma.carro.update({
    where: {
      placa,
    },
    data: {
      placa,
      ...carroData,
    },
    select: {
      cpf: true,
      modelo: true,
      ano: true,
      placa: true,
      cor: true,
    },
  });

  return carro;
};

export const deleteCarro = async (placa: string): Promise<void> => {
  await prisma.carro.delete({
    where: {
      placa,
    },
  });
};
