import express from "express";
import helmet from "helmet";
import cors from "cors";
import "express-async-errors";
import dotenv from "dotenv";

import { prisma } from "./prisma";

import { handleZodError } from "./middlewares/handleZodError.middleware";
import { handlePrismaError } from "./middlewares/handlePrismaError.middleware";
import { handleCommonError } from "./middlewares/handleCommonError.middleware";

import carroRoutes from "./routes/carro.route";
import motoristasRoutes from "./routes/motorista.route";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

// Incluir suas rotas aqui
app.use("/carros",carroRoutes);
app.use("/motoristas",motoristasRoutes);


app.use(handleZodError);
app.use(handlePrismaError);
app.use(handleCommonError);

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, async () => {
  await prisma.$connect();
  console.log(`Server started on http://localhost:${PORT}`);
});
