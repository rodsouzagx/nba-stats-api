import { Router } from "express";
import validateId from "../../../shared/middlewares/validateId";
import * as playersController from "../controllers/players.controller";

const router = Router();

router.get("/", playersController.getAll);
router.get("/:id", validateId, playersController.getById);
router.get("/:id/stats", validateId, playersController.getPlayerStats);

export default router;
