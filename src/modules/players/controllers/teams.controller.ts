import { Request, Response } from "express";
import * as teamsService from "../services/teams.service";

async function getAll(req: Request, res: Response) {
  const teams = await teamsService.getAllTeams();
  res.json(teams);
}

async function getById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const team = await teamsService.getTeamById(id);
  res.json(team);
}

async function getTeamPlayers(req: Request, res: Response) {
  const teamId = Number(req.params.id);
  const players = await teamsService.getTeamPlayers(teamId);
  res.json(players);
}

export { getAll, getById, getTeamPlayers };
