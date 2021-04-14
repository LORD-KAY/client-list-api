import * as express from "express";
import { ClientPolicy } from "src/policies/validation.policy";
import clientController from "../controllers/clients.controller";
const router = express.Router();

export default () => {
  router
    .route(`/clients`)
    .get(clientController.list)
    .post(ClientPolicy.create, clientController.create);
  return router;
};
