import * as express from "express";
import { ClientPolicy } from "src/policies/validation.policy";
import clientController from "../controllers/clients.controller";
const router = express.Router();

export default () => {
  router
    .route(`/clients`)
    .get(clientController.list)
    .post(ClientPolicy.create, clientController.create);

  router
    .route(`/clients/:id`)
    .put(ClientPolicy.create, clientController.update)
    .delete(clientController.delete);
  return router;
};
