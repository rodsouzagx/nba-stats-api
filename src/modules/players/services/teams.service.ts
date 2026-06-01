import * as teamsRepository from "../repositories/teams.repository";
import AppError from "../../../shared/errors/AppError";

async function getAllTeams() {
  return await teamsRepository.findAll();
}

async function getTeamById(id: number) {
  const team = await teamsRepository.findById(id);

  if (!team) {
    throw new AppError("Team not found", 404);
  }

  return team;
}

async function getTeamPlayers(teamId: number) {
  return await teamsRepository.findPlayersByTeam(teamId);
}

export { getAllTeams, getTeamById, getTeamPlayers };
