import { Request, Response } from "express";

const clientController = {
  async list(req: Request, res: Response) {
    try {
    } catch (e) {
      return res.status(500).json({
        message: `Unable to get list of clients`,
        path: req.path,
        timestamp: new Date().toISOString(),
      });
    }
  },
};

export default clientController;
