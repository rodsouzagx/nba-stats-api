import app from "./app";
import logger from "./config/logger";

app.listen(3333, () => {
  logger.info("Server is running on port 3333");
});
