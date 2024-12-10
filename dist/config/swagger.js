"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocs = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
dotenv_1.default.config();
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
const swaggerDocs = (app, port) => {
    app.use("/api/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    console.log(`📄 Swagger docs disponibles en ${process.env.BASE_URL}/api/docs`);
};
exports.swaggerDocs = swaggerDocs;
