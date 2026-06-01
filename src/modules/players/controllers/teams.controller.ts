import { Request, Response, NextFunction } from "express";
import * as teamsService from "../services/teams.service";

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const teams = await teamsService.getAllTeams();
    res.json(teams);
  } catch (err) {
    next(err);
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const team = await teamsService.getTeamById(id);
    res.json(team);
  } catch (err) {
    next(err);
  }
}

async function getTeamPlayers(req: Request, res: Response, next: NextFunction) {
  try {
    const teamId = Number(req.params.id);
    const players = await teamsService.getTeamPlayers(teamId);
    res.json(players);
  } catch (err) {
    next(err);
  }
}

export { getAll, getById, getTeamPlayers };
