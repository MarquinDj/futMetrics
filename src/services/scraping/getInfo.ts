import axios from "axios";
import { Matchlink, Team } from "../../interfaces/types";
import {
  getNameLink,
  getTeamGames,
  getTeamStats,
} from "../../utils/scraping";
import { ENV_VAR } from "../../config/env";

export async function scrapeSite() {
  try {
    const response = await axios.get(ENV_VAR.URL_CAMP);
    const html = response.data;
    const teams = getNameLink(html);
    return teams;
  } catch (e) {
    throw new Error(`Erro ao coletar times: ${e}`);
  }
}

export async function scrapeTeamMatches(
  team: Team,
  local: string
): Promise<Matchlink[]> {
  try {
    const response = await axios.get(ENV_VAR.URL_SITE.concat(team.link));
    const html = response.data;
    const teamMatches = getTeamGames(html, local);
    return teamMatches;
  } catch (e) {
    throw new Error(`Erro ao coletar informações dos times: ${e}`);
  }
}

export async function scrapTeamStats(
  matches: Array<Matchlink>,
  homeAway: string,
  team: Team
) {
  try {
    let proGoalsTemp = 0,
      conGoalsTemp = 0,
      proCornersTemp = 0,
      conCornersTemp = 0,
      proCardsTemp = 0,
      conCardsTemp = 0;

    for (const element of matches) {
      await new Promise((resolve) => setTimeout(resolve, 9000));
      const response = await axios.get(ENV_VAR.URL_SITE.concat(element.link));
      const html = response.data;
      const { proGoals, conGoals, proCorners, conCorners, proCards, conCards } =
        getTeamStats(html, homeAway);
      proGoalsTemp += proGoals;
      conGoalsTemp += conGoals;
      proCornersTemp += proCorners;
      conCornersTemp += conCorners;
      proCardsTemp += proCards;
      conCardsTemp += conCards;
    }
    if (team.matchNumber && team.matchNumber !== 0) {
      team.proGoals = proGoalsTemp / team.matchNumber;
      team.conGoals = conGoalsTemp / team.matchNumber;
      team.proCorners = proCornersTemp / team.matchNumber;
      team.conCorners = conCornersTemp / team.matchNumber;
      team.proCards = proCardsTemp / team.matchNumber;
      team.conCards = conCardsTemp / team.matchNumber;
    }
      return team;
  } catch (e) {
    throw new Error(`Erro ao coletar informações das partidas: ${e}`);
  }
}