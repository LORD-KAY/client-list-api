import * as express from "express";
import ProviderController from "../controllers/providers.controller";
import { ProviderPolicy } from "../policies/validation.policy";
const router = express.Router();
export default () => {
  router
    .route("/providers")
    .get(ProviderController.list)
    .post(ProviderPolicy.create, ProviderController.create);
  return router;
};
