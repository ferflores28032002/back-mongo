"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTestSchema = exports.createTestSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// Validación para crear un test
exports.createTestSchema = joi_1.default.object({
    type: joi_1.default.string()
        .required()
        .valid("desarrollar", "generación de código")
        .messages({
        "any.required": "El campo 'type' es obligatorio.",
        "string.base": "El campo 'type' debe ser una cadena de texto.",
        "any.only": "El campo 'type' solo puede ser 'desarrollar' o 'generación de código'.",
    }),
    question: joi_1.default.string()
        .required()
        .min(10)
        .messages({
        "any.required": "El campo 'question' es obligatorio.",
        "string.base": "El campo 'question' debe ser una cadena de texto.",
        "string.min": "El campo 'question' debe tener al menos 10 caracteres.",
    }),
    solution: joi_1.default.string()
        .optional()
        .min(5)
        .messages({
        "string.base": "El campo 'solution' debe ser una cadena de texto.",
        "string.min": "El campo 'solution' debe tener al menos 5 caracteres.",
    }),
});
// Validación para actualizar un test
exports.updateTestSchema = joi_1.default.object({
    type: joi_1.default.string()
        .optional()
        .valid("desarrollar", "generación de código")
        .messages({
        "string.base": "El campo 'type' debe ser una cadena de texto.",
        "any.only": "El campo 'type' solo puede ser 'desarrollar' o 'generación de código'.",
    }),
    question: joi_1.default.string()
        .optional()
        .min(10)
        .messages({
        "string.base": "El campo 'question' debe ser una cadena de texto.",
        "string.min": "El campo 'question' debe tener al menos 10 caracteres.",
    }),
    solution: joi_1.default.string()
        .optional()
        .min(5)
        .messages({
        "string.base": "El campo 'solution' debe ser una cadena de texto.",
        "string.min": "El campo 'solution' debe tener al menos 5 caracteres.",
    }),
});
