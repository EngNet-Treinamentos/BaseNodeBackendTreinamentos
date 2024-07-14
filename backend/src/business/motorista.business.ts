import { type Motorista } from "../schemas/motorista.schema";
import { prisma } from "../prisma";
import createHttpError from "http-errors";


export async function list(motoristaData: Partial<Motorista> = {}): Promise<Motorista[]> {
  const motoristas = await prisma.motorista.findMany({
    select: {
      cpf: true,
      nome: true,
      categoria_cnh: true,
      vencimento_cnh: true,
    },
    where: {
      ...motoristaData,
    },
  });

  return motoristas;
}

export async function findMotoristaByCpf(cpf: string): Promise<Motorista | null> {
  const motorista = await prisma.motorista.findFirst({
    where: {
      cpf,
    },
    select: {
      nome: true,
      cpf: true,
      categoria_cnh: true,
      vencimento_cnh: true,
    },
  });

  if (motorista === null) {
    throw new createHttpError.NotFound("Motorista not found");
  }

  return motorista;
}

export async function createMotorista(motoristaData: Motorista): Promise<Motorista> {
  const motorista = await prisma.motorista.create({
    data: {
      ...motoristaData,
    },
    select: {
      nome: true,
      cpf: true,
      categoria_cnh: true,
      vencimento_cnh: true,
    },
  });

  return motorista;
}

export async function updateMotorista({ cpf, ...motoristaData }: Motorista): Promise<Motorista> {
  const motorista = await prisma.motorista.update({
    where: {
      cpf,
    },
    data: {
      ...motoristaData,
    },
    select: {
      nome: true,
      cpf: true,
      categoria_cnh: true,
      vencimento_cnh: true,
    },
  });

  return motorista;
}

export async function deleteMotorista(cpf: string): Promise<void> {
  await prisma.motorista.delete({
    where: {
      cpf,
    },
  });
}
