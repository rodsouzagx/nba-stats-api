import { Router } from "express";
import * as teamsController from "../controllers/teams.controller";

const router = Router();

router.get("/", teamsController.getAll);
router.get("/:id", teamsController.getById);
router.get("/:id/players", teamsController.getTeamPlayers);

export default router;
