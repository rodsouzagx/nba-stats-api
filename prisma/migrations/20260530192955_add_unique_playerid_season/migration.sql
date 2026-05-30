/*
  Warnings:

  - A unique constraint covering the columns `[playerId,season]` on the table `SeasonStats` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SeasonStats_playerId_season_key" ON "SeasonStats"("playerId", "season");
