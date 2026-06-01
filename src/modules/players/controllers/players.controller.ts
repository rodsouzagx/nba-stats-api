import { Request, Response, NextFunction } from "express";
import * as playersService from "../services/players.service";

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const search = req.query.search as string;
    const position = req.query.position as string;
    const players = await playersService.getAllPlayers(search, position);
    res.json(players);
  } catch (err) {
    next(err);
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const player = await playersService.getPlayerById(id);
    res.json(player);
  } catch (err) {
    next(err);
  }
}

async function getPlayerStats(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const playerStats = await playersService.getPlayerStats(id);
    res.json(playerStats);
  } catch (err) {
    next(err);
  }
}

export { getAll, getById, getPlayerStats };
