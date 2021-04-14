import { Response, Request } from "express";
import { NextFunction } from "express";
import * as Joi from "joi";
export const ProviderPolicy = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const schema = Joi.object({
        name: Joi.string().min(4).required(),
      });
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(423).json({
          message: error.message,
          path: req.path,
          success: false,
          timestamp: new Date().toISOString(),
        });
      } else {
        next();
      }
    } catch (e) {
      return res.status(400).json({
        message: `Unable to validate provider body`,
        success: false,
        path: req.path,
        timestamp: new Date().toISOString(),
      });
    }
  },
};

export const ClientPolicy = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const schema = Joi.object({
        name: Joi.string().min(4).required(),
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        phone: Joi.string().min(10).max(13).required(),
        providers: Joi.array().items(Joi.string().required()),
      });
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(423).json({
          message: error.message,
          path: req.path,
          success: false,
          timestamp: new Date().toISOString(),
        });
      } else {
        next();
      }
    } catch (e) {
      return res.status(400).json({
        message: `Unable to validate provider body`,
        success: false,
        path: req.path,
        timestamp: new Date().toISOString(),
      });
    }
  },
};
