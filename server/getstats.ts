import axios from "axios";
import cheerio, { load } from "cheerio";
import { Team } from "./interface";
import { getNameLink, getTeamGoals } from "./utilsScrap";

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
  const goals = getTeamGoals(html);
  return goals;
}

async function test() {
  const teams = await scrapeSite();

  const teamsInfo = await scrapeTeam(teams[1]);

  return teamsInfo;
}

test();
