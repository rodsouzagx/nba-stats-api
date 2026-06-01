import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import AppError from "../errors/AppError";

function validateId(req: Request, res: Response, next: NextFunction) {
  const schema = z.object({
    id: z.string().regex(/^\d+$/, "ID must be a number"),
  });

  const result = schema.safeParse(req.params);

  if (!result.success) {
    throw new AppError("Invalid ID format", 400);
  }

  next();
}

export default validateId;
