import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import connectDB from "./config/db";
import { swaggerDocs } from "./config/swagger";
import testRoutes from "./routes/testRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rutas
app.use("/api/tests", testRoutes);

swaggerDocs(app, 5000);

// Conexión a la base de datos
connectDB();

export default app;
