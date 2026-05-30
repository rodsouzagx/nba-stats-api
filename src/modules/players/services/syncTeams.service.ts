import "dotenv/config";
import api from "../../../config/balldontlie";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function syncTeams() {
  const teams = await api.nba.getTeams();

  const activeTeams = teams.data.filter((team) => team.conference.trim() != "");

  for (const team of activeTeams) {
    await prisma.team.upsert({
      where: { id: team.id },
      update: {
        name: team.name,
        city: team.city,
        conference: team.conference,
        division: team.division,
      },
      create: {
        name: team.name,
        city: team.city,
        conference: team.conference,
        division: team.division,
      },
    });
  }

  console.log(`${activeTeams.length} times sincronizados com sucesso!`);
}

export default syncTeams;
