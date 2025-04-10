import { scrapeSite, scrapeTeam } from "../data/scrapSite/getInfo";
import {
  calculateExpCards,
  calculateExpCorners,
  calculateExpGoals,
} from "./utils/utils";

async function getDuelStatsBR() {
  try {
    const teams = await scrapeSite();
    const home = "Corinthians";
    const away = "Ceará";
    const homeTeam = teams.find((team) => team.name === home);
    const awayTeam = teams.find((team) => team.name === away);
    if (homeTeam && awayTeam) {
      const homeStats = await scrapeTeam(homeTeam);
      const awayStats = await scrapeTeam(awayTeam);
      const { homeExpGoals, awayExpGoals, expGoals } = calculateExpGoals(
        homeStats,
        awayStats
      );
      const { homeExpCards, awayExpCards, expCards } = calculateExpCards(
        homeStats,
        awayStats
      );
      const { homeExpCorners, awayExpCorners, expCorners } =
        calculateExpCorners(homeStats, awayStats);
      console.log(`Espera-se para o ${homeTeam?.name}:
            gols = ${homeExpGoals}
            escanteios = ${homeExpCorners}
            cartões = ${homeExpCards}`);
      console.log(`Espera-se para o ${awayTeam?.name}:
            gols = ${awayExpGoals}
            escanteios = ${awayExpCorners}
            cartões = ${awayExpCards}`);
      console.log(`Espera-se para a partida:
            gols = ${expGoals}
            escanteios = ${expCorners}
            cartões = ${expCards}`);
    }
  } catch (e) {
    console.error("Erro ao calcular estatísticas");
  }
}

getDuelStatsBR()