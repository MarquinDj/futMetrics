import { Team } from "../interfaces/interface";

export function calculateExpGoals(homeStats: Team, awayStats: Team) {
  try {
    if (
      homeStats.homeGoals &&
      homeStats.awayGoals &&
      awayStats.homeGoals &&
      awayStats.awayGoals
    ) {
      const homeExpGoals = (homeStats.homeGoals + homeStats.awayGoals) / 2;
      const awayExpGoals = (awayStats.homeGoals + awayStats.awayGoals) / 2;
      const expGoals = homeExpGoals + awayExpGoals;
      return { homeExpGoals, awayExpGoals, expGoals };
    } else {
      throw new Error(`cai no else`);
    }
  } catch (e) {
    throw new Error(`Erro ao calcular os gols esperados ${e}`);
  }
}

export function calculateExpCards(homeStats: Team, awayStats: Team) {
    try {
      if (
        homeStats.homeCards &&
        homeStats.awayCards &&
        awayStats.homeCards &&
        awayStats.awayCards
      ) {
        const homeExpCards = (homeStats.homeCards + homeStats.awayCards) / 2;
        const awayExpCards = (awayStats.homeCards + awayStats.awayCards) / 2;
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
        homeStats.homeCorners &&
        homeStats.awayCorners&&
        awayStats.homeCorners &&
        awayStats.awayCorners
      ) {
        const homeExpCorners = (homeStats.homeCorners + homeStats.awayCorners) / 2;
        const awayExpCorners = (awayStats.homeCorners + awayStats.awayCorners) / 2;
        const expCorners = homeExpCorners + awayExpCorners;
        return { homeExpCorners, awayExpCorners, expCorners };
      } else {
        throw new Error("Erro ao calcular os escanteios esperados");
      }
    } catch (e) {
      throw new Error("Erro ao calcular os escanteios esperados");
    }
  }
