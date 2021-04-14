import express from "express";
import clientController from "../controllers/clients.controller";
const router = express.Router();

export default () => {
  router.route(`/clients`).get(clientController.list);
  return router;
};
