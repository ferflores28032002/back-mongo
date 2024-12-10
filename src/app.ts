import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import connectDB from "./config/db";
import { swaggerDocs } from "./config/swagger";
import testRoutes from "./routes/testRoutes";
import dotenv from "dotenv";

dotenv.config();

export const app = express();

 const PORT = parseInt(process.env.PORT || "6000", 10); // Convertir a número

const startServer = async () => {
  try {
    // Conecta a la base de datos antes de iniciar el servidor
    await connectDB();

    // Middleware
    app.use(bodyParser.json());
    app.use(cors());

    // Rutas
    app.use("/api/tests", testRoutes);

    // Documentación Swagger
    swaggerDocs(app, PORT); // Ahora PORT es un número

    // Inicia el servidor
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();
