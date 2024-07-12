import { type Motorista } from "../schemas/motorista.schema";
import { prisma } from "../prisma";
import createHttpError from "http-errors";

export async function list(motoristaData: Partial<Motorista> = {}): Promise<Motorista[]> {
  const motoristas = await prisma.motorista.findMany({
    select: {
      id: true,
      name: true,
      cpf: true,
      cnh_id: true,
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
      id: true,
      name: true,
      cpf: true,
      cnh_id: true,
    },
  });

  if (motorista === null) {
    throw new createHttpError.NotFound("Motorista not found");
  }

  return motorista;
}

export async function createMotorista(ownerData: Motorista): Promise<Motorista> {
  const motorista = await prisma.motorista.create({
    data: {
      ownerData,
    },
    select: {
      id: true,
      name: true,
      cpf: true,
      cnh_id: true,
    },
  });

  return motorista;
}

export async function updateMotorista({ cpf, ...ownerData }: Motorista): Promise<Motorista> {
  const motorista = await prisma.motorista.update({
    where: {
      cpf,
    },
    data: {
      ...ownerData,
    },
    select: {
      id: true,
      name: true,
      cpf: true,
      cnh_id: true,
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
