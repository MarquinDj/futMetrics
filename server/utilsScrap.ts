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

export function getTeamGoals(html: any, team: Team): Team {
  const $ = load(html);
  const expectedGoalsHome = Number(
    $("#stats_standard_24 > tfoot > tr:nth-child(1) > td:nth-child(29)").text().replace(",", ".")
  );
  const expectedGoalsAway = Number(
    $("#stats_standard_24 > tfoot > tr:nth-child(2) > td:nth-child(29)").text().replace(",", ".")
  );

  team.homeGoals = expectedGoalsHome;
  team.awayGoals = expectedGoalsAway;

  return team;
}

export function getTeamCards(html: any, team: Team): Team {
  const $ = load(html);
  const games = Number(
    $("#stats_misc_24 > tfoot > tr:nth-child(1) > td:nth-child(5)").text()
  );
  const yellowCardsHome = Number(
    $("#stats_misc_24 > tfoot > tr:nth-child(1) > td:nth-child(6)").text()
  );
  const yellowCardsAway = Number(
    $("#stats_misc_24 > tfoot > tr:nth-child(2) > td:nth-child(6)").text()
  );
  const redCardsHome = Number(
    $("#stats_misc_24 > tfoot > tr:nth-child(1) > td:nth-child(7)").text()
  );
  const redCardsAway = Number(
    $("#stats_misc_24 > tfoot > tr:nth-child(2) > td:nth-child(7)").text()
  );
  const totalCardsHome = (yellowCardsHome + redCardsHome) / games;
  const totalCardsAway = (yellowCardsAway + redCardsAway) / games;
  team.homeCards = totalCardsHome;
  team.awayCards = totalCardsAway;
  return team;
}
export function getTeamCorners(html: any, team: Team): Team {
  const $ = load(html);
  const games = Number(
    $(
      "#stats_passing_types_24 > tfoot > tr:nth-child(1) > td:nth-child(5)"
    ).text()
  );

  const homeCornersIn = Number(
    $(
      "#stats_passing_types_24 > tfoot > tr:nth-child(1) > td:nth-child(15)"
    ).text()
  );
  const homeCornersOut = Number(
    $(
      "#stats_passing_types_24 > tfoot > tr:nth-child(1) > td:nth-child(16)"
    ).text()
  );
  const homeCornersLine = Number(
    $(
      "#stats_passing_types_24 > tfoot > tr:nth-child(1) > td:nth-child(17)"
    ).text()
  );

  const awayCornersIn = Number(
    $(
      "#stats_passing_types_24 > tfoot > tr:nth-child(2) > td:nth-child(15)"
    ).text()
  );
  const awayCornersOut = Number(
    $(
      "#stats_passing_types_24 > tfoot > tr:nth-child(2) > td:nth-child(16)"
    ).text()
  );
  const awayCornersLine = Number(
    $(
      "#stats_passing_types_24 > tfoot > tr:nth-child(2) > td:nth-child(17)"
    ).text()
  );

  const totalCornersHome =
    (homeCornersIn + homeCornersOut + homeCornersLine) / games;
  const totalCornersAway =
    (awayCornersIn + awayCornersOut + awayCornersLine) / games;

  team.homeCorners = totalCornersHome;
  team.awayCorners = totalCornersAway

  return team;
}
