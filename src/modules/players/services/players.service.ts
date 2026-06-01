import * as playersRepository from "../repositories/players.repository";

async function getAllPlayers(search?: string, position?: string) {
  return await playersRepository.findAll(search, position);
}

async function getPlayerById(id: number) {
  return await playersRepository.findById(id);
}

async function getPlayerStats(id: number) {
  return await playersRepository.findStats(id);
}

export { getAllPlayers, getPlayerById, getPlayerStats };
