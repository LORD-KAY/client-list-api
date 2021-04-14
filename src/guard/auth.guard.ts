import { NextFunction, Request } from "express";
import { Response } from "express";
import { verify } from "jsonwebtoken";
import { config } from "../config/config";
export const AuthGuard = (req: Request, res: Response, next: NextFunction) => {
  if (!req.url.includes("/auth")) {
    const token = req.headers?.authorization?.split(" ")?.pop();
    if (!token) {
      return res.status(401).json({
        message: `Invalid token provided`,
        success: false,
        timestamp: new Date().toISOString(),
      });
    }
    try {
      const payload = verify(token, config.get("auth.secret"), {
        algorithms: ["HS256"],
        issuer: `ssr-client-app`,
        audience: `ssr-client-app`,
      });
      (req as any).decoded = payload;
    } catch (e) {
      return res.status(401).json({
        message: `Invalid token signature`,
        success: false,
        timestamp: new Date().toISOString(),
      });
    }
    next();
  } else {
    next();
  }
};
