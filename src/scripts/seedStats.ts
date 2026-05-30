import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function randomBetween(min: number, max: number): number {
  return parseFloat((min + Math.random() * (max - min)).toFixed(1));
}
async function seedStats() {
  const players = await prisma.player.findMany();

  for (const player of players) {
    await prisma.seasonStats.upsert({
      where: {
        playerId_season: {
          playerId: player.id,
          season: "2025-26",
        },
      },
      update: {
        gamesPlayed: Math.round(randomBetween(20, 82)),
        pointsPerGame: randomBetween(2, 35),
        reboundsPerGame: randomBetween(1, 15),
        assistsPerGame: randomBetween(1, 12),
      },
      create: {
        playerId: player.id,
        season: "2025-26",
        gamesPlayed: Math.round(randomBetween(20, 82)),
        pointsPerGame: randomBetween(2, 35),
        reboundsPerGame: randomBetween(1, 15),
        assistsPerGame: randomBetween(1, 12),
      },
    });
  }
  console.log(`Stats geradas para ${players.length} jogadores!`);
}

export default seedStats;

seedStats();
