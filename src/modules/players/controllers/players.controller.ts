import { Request, Response } from "express";
import * as playersService from "../services/players.service";

async function getAll(req: Request, res: Response) {
  const search = req.query.search as string;
  const position = req.query.position as string;
  const players = await playersService.getAllPlayers(search, position);
  res.json(players);
}

async function getById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const player = await playersService.getPlayerById(id);
  res.json(player);
}

async function getPlayerStats(req: Request, res: Response) {
  const id = Number(req.params.id);
  const playerStats = await playersService.getPlayerStats(id);
  res.json(playerStats);
}

export { getAll, getById, getPlayerStats };
