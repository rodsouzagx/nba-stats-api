import * as playersRepository from "../repositories/players.repository";
import AppError from "../../../shared/errors/AppError";

async function getAllPlayers(search?: string, position?: string) {
  return await playersRepository.findAll(search, position);
}

async function getPlayerById(id: number) {
  const player = await playersRepository.findById(id);

  if (!player) {
    throw new AppError("Player not found", 404);
  }

  return player;
}

async function getPlayerStats(id: number) {
  return await playersRepository.findStats(id);
}

export { getAllPlayers, getPlayerById, getPlayerStats };
