import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import logger from "../../config/logger";

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  logger.error(err.message);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({ message: "Internal server error" });
}

export default errorHandler;
