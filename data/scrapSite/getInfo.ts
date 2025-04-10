import axios from "axios";
import { Team } from "../../src/interfaces/interface";
import {
  getNameLink,
  getTeamCards,
  getTeamCorners,
  getTeamGoals,
} from "../../src/utils/funcScrap";
import { ENV_VAR } from "../../env";

export async function scrapeSite() {
  try {
    const response = await axios.get(
    ENV_VAR.URL_CAMP
    );
    const html = response.data;
    const teams = getNameLink(html);
    return teams;
  } catch (e) {
    throw new Error(`Erro ao coletar times: ${e}`);
  }
}

export async function scrapeTeam(team: Team) {
  try {
    const response = await axios.get(ENV_VAR.URL_SITE.concat(team.link));
    const html = response.data;
    const updatedTeam = {
      ...team,
      ...getTeamGoals(html, team),
      ...getTeamCards(html, team),
      ...getTeamCorners(html, team),
    };
    return updatedTeam;
  } catch (e) {
    throw new Error(`Erro ao coletar informações dos times: ${e}`);
  }
}
