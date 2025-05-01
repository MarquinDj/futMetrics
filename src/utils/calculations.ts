import { Team } from "../interfaces/types";

export function calculateExpGoals(homeStats: Team, awayStats: Team) {
  try {
    if (
      typeof homeStats.proGoals === "number" &&
      typeof homeStats.conGoals === "number" &&
      typeof awayStats.proGoals === "number" &&
      typeof awayStats.conGoals === "number"
    ) {
      const homeExpGoals = (homeStats.proGoals + awayStats.conGoals) / 2;
      const awayExpGoals = (awayStats.proGoals + homeStats.conGoals) / 2;
      const expGoals = homeExpGoals + awayExpGoals;
      return { homeExpGoals, awayExpGoals, expGoals };
    } else {
      throw new Error(`Erro ao calcular os gols esperados`);
    }
  } catch (e) {
    throw new Error(`Erro ao calcular os gols esperados ${e}`);
  }
}

export function calculateExpCards(homeStats: Team, awayStats: Team) {
  try {
    if (
      typeof homeStats.proCards === "number" &&
      typeof homeStats.conCards === "number" &&
      typeof awayStats.proCards === "number" &&
      typeof awayStats.conCards === "number"
    ) {
      const homeExpCards = (homeStats.proCards + awayStats.conCards) / 2;
      const awayExpCards = (awayStats.proCards + homeStats.conCards) / 2;
      const expCards = homeExpCards + awayExpCards;
      return { homeExpCards, awayExpCards, expCards };
    } else {
      throw new Error("Erro ao calcular os cartões esperados");
    }
  } catch (e) {
    throw new Error("Erro ao calcular os cartões esperados");
  }
}

export function calculateExpCorners(homeStats: Team, awayStats: Team) {
  try {
    if (
      typeof homeStats.proCorners === "number" &&
      typeof homeStats.conCorners === "number" &&
      typeof awayStats.proCorners === "number" &&
      typeof awayStats.conCorners === "number"
    ) {
      const homeExpCorners = (homeStats.proCorners + awayStats.conCorners) / 2;
      const awayExpCorners = (awayStats.proCorners + homeStats.conCorners) / 2;
      const expCorners = homeExpCorners + awayExpCorners;
      return { homeExpCorners, awayExpCorners, expCorners };
    } else {
      throw new Error(
        "Erro ao calcular os escanteios esperados, resultado falso"
      );
    }
  } catch (e) {
    throw new Error("Erro ao calcular os escanteios esperados");
  }
}
