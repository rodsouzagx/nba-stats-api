import * as teamsRepository from "../repositories/teams.repository";

async function getAllTeams() {
  return await teamsRepository.findAll();
}

async function getTeamById(id: number) {
  return await teamsRepository.findById(id);
}

async function getTeamPlayers(teamId: number) {
  return await teamsRepository.findPlayersByTeam(teamId);
}

export { getAllTeams, getTeamById, getTeamPlayers };
