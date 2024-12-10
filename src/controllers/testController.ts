import { NextFunction, Request, Response } from "express";
import * as TestService from "../services/testService";

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
export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const tests = await TestService.getAllTests();
    res.status(200).json(tests);
  } catch (err) {
    next(err);
  }
};

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
export const getById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const test = await TestService.getTestById(req.params.id);
    if (!test) {
      res.status(404).json({ message: "Test not found." });
    } else {
      res.status(200).json(test);
    }
  } catch (err) {
    next(err);
  }
};

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
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const test = await TestService.createTest(req.body);
    res.status(200).json({
      msg: "Confirmación de la creación exitosa.",
      test,
    });
  } catch (err) {
    next(err);
  }
};

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
export const update = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const test = await TestService.updateTest(req.params.id, req.body);
    if (!test) {
      res.status(404).json({ message: "Test not found." });
    } else {
      res.status(200).json(test);
    }
  } catch (err) {
    next(err);
  }
};

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
export const remove = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const test = await TestService.deleteTest(req.params.id);
    if (!test) {
      res.status(404).json({ message: "Test not found." });
    } else {
      res.status(200).json({ message: "Test deleted successfully." });
    }
  } catch (err) {
    next(err);
  }
};
