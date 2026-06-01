import prisma from "../../../config/prisma";

async function findAll(search?: string, position?: string) {
  return await prisma.player.findMany({
    where: {
      name: search ? { contains: search, mode: "insensitive" } : undefined,
      position: position ? { contains: position, mode: "insensitive" } : undefined,
    },
  });
}

async function findById(id: number) {
  return await prisma.player.findUnique({
    where: { id },
  });
}

async function findStats(playerId: number) {
  return await prisma.seasonStats.findMany({
    where: { playerId },
  });
}

export { findAll, findById, findStats };
