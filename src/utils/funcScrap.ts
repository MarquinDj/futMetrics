import { load } from "cheerio";
import { Team } from "../interfaces/interface";

export function getNameLink(html: any): Team[] {
  try {
    const teams: Team[] = [];
    const $ = load(html);
    $("#results2025241_overall > tbody > tr > td:nth-child(2) > a").map(
      (_, team) => {
        const link = $(team).attr("href");
        const name = $(team).text();
        if (link) {
          teams.push({ link, name });
        }
      }
    );
    return teams;
  } catch (e) {
    throw new Error(`Erro ao coletar nome e link dos times: ${e}`);
  }
}

export function getTeamGames(html: any, homeAway: string) {
  try {
    const $ = load(html);
    const games: any = [];
    $("#matchlogs_for > tbody > tr").map((_, team) => {
      const row = $(team).find("th, td");
      const local = $(row[5]).text();
      const match = $(row[18]);
      const matchLink = match.find("a").attr("href");
      const matchText = match.text();
      if (local == homeAway && matchText !== "Confronto") {
        games.push({
          link: matchLink,
        });
      }
    });
    return games;
  } catch (e) {
    throw new Error(`Erro ao acessar página do time da casa: ${e}`);
  }
}

export function getTeamStats(html: string, homeAway: string) {
  try {
    const $ = load(html);
    if (homeAway == "Em casa") {
      const proGoals = Number(
        $('table[id^="stats"][id$="summary"]')
          .first()
          .find("tfoot > tr > td:nth-child(7)")
          .text()
      );
      const conGoals = Number(
        $('table[id^="stats"][id$="summary"]')
          .eq(1)
          .find("tfoot > tr > td:nth-child(7)")
          .text()
      );
      const proCorners = Number(
        $("#team_stats_extra > div").eq(0).children("div").eq(6).text()
      );
      const conCorners = Number(
        $("#team_stats_extra > div").eq(0).children("div").eq(8).text()
      );
      const proCards = Number(
        $('table[id^="stats"][id$="summary"]')
          .first()
          .find("tfoot > tr > td:nth-child(13)")
          .text()
      );
      const conCards = Number(
        $('table[id^="stats"][id$="summary"]')
          .eq(1)
          .find("tfoot > tr > td:nth-child(13)")
          .text()
      );

      return { proGoals, conGoals, proCorners, conCorners, proCards, conCards };
    } else {
      const proGoals = Number(
        $('table[id^="stats"][id$="summary"]')
          .eq(1)
          .find("tfoot > tr > td:nth-child(7)")
          .text()
      );
      const conGoals = Number(
        $('table[id^="stats"][id$="summary"]')
          .first()
          .find("tfoot > tr > td:nth-child(7)")
          .text()
      );
      const proCorners = Number(
        $("#team_stats_extra > div").eq(0).children("div").eq(8).text()
      );
      const conCorners = Number(
        $("#team_stats_extra > div").eq(0).children("div").eq(6).text()
      );
      const proCards = Number(
        $('table[id^="stats"][id$="summary"]')
          .eq(1)
          .find("tfoot > tr > td:nth-child(13)")
          .text()
      );
      const conCards = Number(
        $('table[id^="stats"][id$="summary"]')
          .first()
          .find("tfoot > tr > td:nth-child(13)")
          .text()
      );

      return { proGoals, conGoals, proCorners, conCorners, proCards, conCards };
    }
  } catch (e) {
    throw new Error(`Erro ao coletar informações dos times: ${e}`);
  }
}
