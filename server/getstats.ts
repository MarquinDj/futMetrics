import axios from "axios";
import { Team } from "./interface";
import { getNameLink, getTeamCards, getTeamCorners, getTeamGoals } from "./utilsScrap";

async function scrapeSite() {
  const response = await axios.get(
    "https://fbref.com/pt/comps/24/Serie-A-Estatisticas"
  );
  const html = response.data;
  const teams = getNameLink(html);
  return teams;
}

async function scrapeTeam(team: Team) {
  const response = await axios.get("https://fbref.com".concat(team.link));
  const html = response.data;
  const updatedTeam = {
    ...team,
    ...getTeamGoals(html, team),
    ...getTeamCards(html, team),
    ...getTeamCorners(html, team),
  };
  return updatedTeam;
}

async function test() {
  const teams = await scrapeSite();

  const teamsInfo = await scrapeTeam(teams[1]);

  return teamsInfo;
}

test();
