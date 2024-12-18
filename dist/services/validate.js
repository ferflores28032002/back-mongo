"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            res.status(400).json({ message: "Validation Error", errors });
        }
        else {
            next();
        }
    };
};
exports.validateRequest = validateRequest;
