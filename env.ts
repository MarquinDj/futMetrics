import dotenv from "dotenv";
dotenv.config();

export const ENV_VAR = {
  URL_CAMP: process.env.URL_CAMP as string,
  URL_SITE: process.env.URL_SITE as string,
} as const;