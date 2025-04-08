import { load } from "cheerio";
import { Team } from "./interface";

export function getNameLink(html: any): Team[] {
  const teams: Team[] = [];
  const $ = load(html);
  const teamLinks = $(
    "#results2025241_overall > tbody > tr > td:nth-child(2) > a"
  );
  teamLinks.map((_, team) => {
    const link = $(team).attr("href");
    const name = $(team).text();
    if (link) {
      teams.push({ link, name });
    }
  });
  return teams;
}

export function getTeamGoals(html: any): any[] {
  const $ = load(html);
  const expectedGoals = $("#stats_standard_24 > tfoot > tr > td:nth-child(29)");
  const goals: any[] = [];
  expectedGoals.map((index, team) => {
    const value = $(team).text();
    if (value) {
      if (index === 0) {
        goals.push({ proGoals: value });
      } else {
        goals.push({ againstGoals: value });
      }
    }
  });
  return goals;
}
