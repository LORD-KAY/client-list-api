import * as mongoose from "mongoose";
import { config } from "./config";
export const db = () => {
  return mongoose.connect(config.get("db.url"), {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
