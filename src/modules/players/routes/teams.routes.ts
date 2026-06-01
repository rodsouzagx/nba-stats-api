import { Router } from "express";
import * as teamsController from "../controllers/teams.controller";
import validateId from "../../../shared/middlewares/validateId";

const router = Router();

router.get("/", teamsController.getAll);
router.get("/:id", validateId, teamsController.getById);
router.get("/:id/players", validateId, teamsController.getTeamPlayers);

export default router;
