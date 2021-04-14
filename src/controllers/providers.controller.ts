import { Request, Response } from "express";
import { create } from "node:domain";
import { slugify } from "../utils/helpers";
import Providers from "../models/providers.schema";

const ProviderController = {
  async list(req: Request, res: Response) {
    try {
      const providers = await Providers.find();
      return res.status(200).json({
        message: `List of providers`,
        success: true,
        data: providers,
      });
    } catch (e) {
      return res.status(500).json({
        message: `Unable to get list of providers`,
        success: false,
        path: req.path,
        timestamp: new Date().toISOString(),
      });
    }
  },
  async create(req: Request, res: Response) {
    try {
      const { slug, name } = req.body;
      const exists = Providers.exists({
        slug,
      });
      if (!exists) {
        const response = Providers.create({ name, slug: slugify(name) });
        return res.status(201).json({
          message: `Provider created successfully`,
          success: true,
          data: response,
        });
      }
    } catch (e) {
      return res.status(500).json({
        message: `Unable to create a provider`,
        success: false,
        path: req.path,
        timestamp: new Date().toISOString(),
      });
    }
  },
};
export default ProviderController;
