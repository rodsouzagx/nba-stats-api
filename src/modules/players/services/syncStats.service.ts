import "dotenv/config";
import api from "../../../config/balldontlie";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function syncStats() {
  const teams = await prisma.team.findMany();

  for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    if (i > 0 && i % 5 === 0) {
      console.log("Aguardando 60 segundos para evitar rate limit...");
      await delay(60000);
    }

    const players = await prisma.player.findMany({
      where: { teamId: team.id },
    });
    const playerIds = players.map((player) => player.id);

    for (const player of players) {
      const stats = await api.nba.getGames({
        seasons: [2025],
        per_page: 5,
      });
      console.log(JSON.stringify(stats.data[0], null, 2));
    }
  }
}

export default syncStats;
