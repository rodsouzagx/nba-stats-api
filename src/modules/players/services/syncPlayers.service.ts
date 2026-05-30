import "dotenv/config";
import api from "../../../config/balldontlie";
import { PrismaClient } from "@prisma/client";
import { feetToCm, lbsToKg } from "../../../shared/utils/convertMeasurements";

const prisma = new PrismaClient();

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function syncPlayers() {
  const teams = await prisma.team.findMany();

  for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    if (i > 0 && i % 5 === 0) {
      console.log("Aguardando 60 segundos para evitar rate limit...");
      await delay(60000);
    }
    const response = await api.nba.getPlayers({ team_ids: [team.id] });
    for (const player of response.data) {
      await prisma.player.upsert({
        where: { id: player.id },
        update: {
          name: `${player.first_name} ${player.last_name}`,
          position: player.position,
          height: feetToCm(player.height),
          weight: lbsToKg(player.weight),
          teamId: player.team.id,
        },
        create: {
          name: `${player.first_name} ${player.last_name}`,
          position: player.position,
          height: feetToCm(player.height),
          weight: lbsToKg(player.weight),
          teamId: player.team.id,
        },
      });
    }
    console.log(`Time ${team.name}: ${response.data.length} jogadores sincronizados`);

    await delay(1500);
  }
}

export default syncPlayers;
