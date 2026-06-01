import express from "express";
import teamsRouter from "./modules/players/routes/teams.routes";
import playerRouter from "./modules/players/routes/players.routes";
import errorHandler from "./shared/middlewares/errorHandler";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "NBA Stats API is running!" });
});

app.use("/api/v1/teams", teamsRouter);
app.use("/api/v1/players", playerRouter);

app.use(errorHandler);

export default app;
