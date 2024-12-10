import Joi from "joi";

// Validación para crear un test
export const createTestSchema = Joi.object({
  type: Joi.string()
    .required()
    .valid("desarrollar", "generación de código")
    .messages({
      "any.required": "El campo 'type' es obligatorio.",
      "string.base": "El campo 'type' debe ser una cadena de texto.",
      "any.only": "El campo 'type' solo puede ser 'desarrollar' o 'generación de código'.",
    }),
  question: Joi.string()
    .required()
    .min(10)
    .messages({
      "any.required": "El campo 'question' es obligatorio.",
      "string.base": "El campo 'question' debe ser una cadena de texto.",
      "string.min": "El campo 'question' debe tener al menos 10 caracteres.",
    }),
  solution: Joi.string()
    .optional()
    .min(5)
    .messages({
      "string.base": "El campo 'solution' debe ser una cadena de texto.",
      "string.min": "El campo 'solution' debe tener al menos 5 caracteres.",
    }),
});

// Validación para actualizar un test
export const updateTestSchema = Joi.object({
  type: Joi.string()
    .optional()
    .valid("desarrollar", "generación de código")
    .messages({
      "string.base": "El campo 'type' debe ser una cadena de texto.",
      "any.only": "El campo 'type' solo puede ser 'desarrollar' o 'generación de código'.",
    }),
  question: Joi.string()
    .optional()
    .min(10)
    .messages({
      "string.base": "El campo 'question' debe ser una cadena de texto.",
      "string.min": "El campo 'question' debe tener al menos 10 caracteres.",
    }),
  solution: Joi.string()
    .optional()
    .min(5)
    .messages({
      "string.base": "El campo 'solution' debe ser una cadena de texto.",
      "string.min": "El campo 'solution' debe tener al menos 5 caracteres.",
    }),
});
