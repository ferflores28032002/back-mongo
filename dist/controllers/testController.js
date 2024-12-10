"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getById = exports.getAll = void 0;
const TestService = __importStar(require("../services/testService"));
/**
 * @swagger
 * /tests:
 *   get:
 *     summary: Obtiene todos los tests
 *     tags: [Tests]
 *     responses:
 *       200:
 *         description: Lista de todos los tests.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
const getAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tests = yield TestService.getAllTests();
        res.status(200).json(tests);
    }
    catch (err) {
        next(err);
    }
});
exports.getAll = getAll;
/**
 * @swagger
 * /tests/{id}:
 *   get:
 *     summary: Obtiene un test por ID
 *     tags: [Tests]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del test
 *     responses:
 *       200:
 *         description: Detalles del test.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Test no encontrado.
 */
const getById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const test = yield TestService.getTestById(req.params.id);
        if (!test) {
            res.status(404).json({ message: "Test not found." });
        }
        else {
            res.status(200).json(test);
        }
    }
    catch (err) {
        next(err);
    }
});
exports.getById = getById;
/**
 * @swagger
 * /tests:
 *   post:
 *     summary: Crea un nuevo test
 *     tags: [Tests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 description: Tipo de test
 *               question:
 *                 type: string
 *                 description: Pregunta del test
 *               solution:
 *                 type: string
 *                 description: Solución del test (opcional)
 *     responses:
 *       201:
 *         description: Test creado exitosamente.
 */
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const test = yield TestService.createTest(req.body);
        res.status(200).json({
            msg: "Confirmación de la creación exitosa.",
            test,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.create = create;
/**
 * @swagger
 * /tests/{id}:
 *   put:
 *     summary: Actualiza un test existente
 *     tags: [Tests]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del test
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 description: Tipo de test
 *               question:
 *                 type: string
 *                 description: Pregunta del test
 *               solution:
 *                 type: string
 *                 description: Solución del test (opcional)
 *     responses:
 *       200:
 *         description: Test actualizado exitosamente.
 */
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const test = yield TestService.updateTest(req.params.id, req.body);
        if (!test) {
            res.status(404).json({ message: "Test not found." });
        }
        else {
            res.status(200).json(test);
        }
    }
    catch (err) {
        next(err);
    }
});
exports.update = update;
/**
 * @swagger
 * /tests/{id}:
 *   delete:
 *     summary: Elimina un test por ID
 *     tags: [Tests]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del test
 *     responses:
 *       200:
 *         description: Test eliminado exitosamente.
 *       404:
 *         description: Test no encontrado.
 */
const remove = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const test = yield TestService.deleteTest(req.params.id);
        if (!test) {
            res.status(404).json({ message: "Test not found." });
        }
        else {
            res.status(200).json({ message: "Test deleted successfully." });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.remove = remove;
