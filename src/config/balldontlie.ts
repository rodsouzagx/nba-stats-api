import { BalldontlieAPI } from "@balldontlie/sdk";

const api = new BalldontlieAPI({
  apiKey: process.env.BALLDONTLIE_API_KEY || "",
});

export default api;
