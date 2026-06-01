import { Router } from "express";
import * as playersController from "../controllers/players.controller";

const router = Router();

router.get("/", playersController.getAll);
router.get("/:id", playersController.getById);
router.get("/:id/stats", playersController.getPlayerStats);

export default router;
