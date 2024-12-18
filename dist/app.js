"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const swagger_1 = require("./config/swagger");
const testRoutes_1 = __importDefault(require("./routes/testRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// Rutas
app.use("/api/tests", testRoutes_1.default);
(0, swagger_1.swaggerDocs)(app, 5000);
// Conexión a la base de datos
(0, db_1.default)();
exports.default = app;
