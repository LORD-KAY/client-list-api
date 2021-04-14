import { Request, Response } from "express";
import Clients from "src/models/clients.schema";
import { slugify } from "src/utils/helpers";

const clientController = {
  async list(req: Request, res: Response) {
    try {
    } catch (e) {
      return res.status(500).json({
        message: `Unable to get list of clients`,
        path: req.path,
        success: false,
        timestamp: new Date().toISOString(),
      });
    }
  },
  async create(req: Request, res: Response) {
    try {
      const { email, name } = req.body;
      const exists = await Clients.exists({ email });
      if (!exists) {
        const response = await Clients.create({
          ...req.body,
          slug: slugify(name),
        });
        return res.status(201).json({
          message: `Client created successfully`,
          success: false,
          data: response,
        });
      }
      return res.status(409).json({
        message: `Client with the same email already exists`,
        success: false,
        timestamp: new Date().toISOString(),
        path: req.path,
      });
    } catch (e) {
      return res.status(500).json({
        message: `Unable to create a new client`,
        path: req.path,
        success: false,
        timestamp: new Date().toISOString(),
      });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const exists = await Clients.exists({ _id: id });
      if (!exists) {
        return res.status(404).json({
          message: `Client doesn't exist`,
          success: false,
          timestamp: new Date().toISOString(),
          path: req.path,
        });
      }
      const response = await Clients.updateOne(
        { _id: id },
        { ...req.body, slug: slugify(name) }
      );
      return res.status(200).json({
        message: `Client updated successfully`,
        success: false,
        data: response,
      });
    } catch (e) {
      return res.status(500).json({
        message: `Unable to update client`,
        path: req.path,
        success: false,
        timestamp: new Date().toISOString(),
      });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const exists = await Clients.exists({ _id: id });
      if (!exists) {
        return res.status(404).json({
          message: `Client doesn't exist`,
          success: false,
          timestamp: new Date().toISOString(),
          path: req.path,
        });
      }
      const response = await Clients.deleteOne({ _id: id });
      // will return 204 with empty or no body
      return res.status(204).json({
        message: `Client successfully deleted`,
        success: true,
        data: response,
      });
    } catch (e) {
      return res.status(500).json({
        message: `Unable to delete client`,
        path: req.path,
        success: false,
        timestamp: new Date().toISOString(),
      });
    }
  },
};

export default clientController;
