import {
  scrapeSite,
  scrapeTeamMatches,
  scrapTeamStats,
} from "./services/scraping/getInfo";
import {
  calculateExpCards,
  calculateExpCorners,
  calculateExpGoals,
} from "./utils/calculations";

async function getDuelStatsBR() {
  try {
    const teams = await scrapeSite();
    const home = "Santos";
    const away = "RB Bragantino";
    const homeTeam = teams.find((team) => team.name === home);
    const awayTeam = teams.find((team) => team.name === away);
    if (homeTeam && awayTeam) {
      const homeTeamMatches = await scrapeTeamMatches(homeTeam, "Em casa");
      const awayTeamMatches = await scrapeTeamMatches(awayTeam, "Visitante");
      homeTeam.matchNumber = homeTeamMatches.length;
      awayTeam.matchNumber = awayTeamMatches.length;
      const homeTeamComplete = await scrapTeamStats(
        homeTeamMatches,
        "Em casa",
        homeTeam
      );
      const awayTeamComplete = await scrapTeamStats(
        awayTeamMatches,
        "Visitante",
        awayTeam
      );
      const { homeExpGoals, awayExpGoals, expGoals } = calculateExpGoals(
        homeTeamComplete,
        awayTeamComplete
      );
      const { homeExpCards, awayExpCards, expCards } = calculateExpCards(
        homeTeamComplete,
        awayTeamComplete
      );
      const { homeExpCorners, awayExpCorners, expCorners } =
        calculateExpCorners(homeTeamComplete, awayTeamComplete);
      console.log(`Espera-se para o ${homeTeamComplete.name}:
            gols = ${homeExpGoals}
            escanteios = ${homeExpCorners}
            cartões = ${homeExpCards}`);
      console.log(`Espera-se para o ${awayTeamComplete.name}:
            gols = ${awayExpGoals}
            escanteios = ${awayExpCorners}
            cartões = ${awayExpCards}`);
      console.log(`Espera-se para a partida:
            gols = ${expGoals}
            escanteios = ${expCorners}
            cartões = ${expCards}`);
    }
  } catch (e) {
    console.log(`Erro ao calcular estatísticas ${e}`);
  }
}

getDuelStatsBR();
