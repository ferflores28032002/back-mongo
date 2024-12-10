import dotenv from "dotenv";
import { Application } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

dotenv.config();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Tests",
      version: "1.0.0",
      description: "Documentación de la API para gestionar tests",
    },
    servers: [
      {
        url: `${process.env.BASE_URL}/api`, // Leer la URL base desde las variables de entorno
      },
    ],
  },
  apis: ["./src/controllers/*.ts"], // Ruta a los archivos donde están los comentarios de Swagger
};

const swaggerSpec = swaggerJsdoc(options);

export const swaggerDocs = (app: Application, port: number) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(
    `📄 Swagger docs disponibles en ${process.env.BASE_URL}/api/docs`
  );
};
