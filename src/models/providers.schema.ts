import * as mongoose from "mongoose";
import Users from "./user.schema";
import { Schema, model, Document, SchemaTypes } from "mongoose";
import * as mongoosePaginate from "mongoose-paginate-v2";
const ProviderSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// defining database
export interface IProvider extends Document {
  name: string;
  _id: string;
}

// exporting client document from the schema
const Providers: mongoose.PaginateModel<IProvider> = model(
  "providers",
  ProviderSchema
);

export default Providers;
