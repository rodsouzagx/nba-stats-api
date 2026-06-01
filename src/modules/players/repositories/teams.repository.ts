import prisma from "../../../config/prisma";

async function findAll() {
  return await prisma.team.findMany();
}

async function findById(id: number) {
  return await prisma.team.findUnique({ where: { id } });
}

async function findPlayersByTeam(teamId: number) {
  return await prisma.player.findMany({ where: { teamId } });
}

export { findAll, findById, findPlayersByTeam };
