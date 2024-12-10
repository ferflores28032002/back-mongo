import { Router } from "express";
import * as TestController from "../controllers/testController";
import { createTestSchema, updateTestSchema } from "../services/testValidation";
import { validateRequest } from "../services/validate";

const router = Router();

router.get("/", TestController.getAll);
router.get("/:id", TestController.getById);
router.post("/", validateRequest(createTestSchema), TestController.create);
router.put("/:id", validateRequest(updateTestSchema), TestController.update);
router.delete("/:id", TestController.remove);

export default router;
