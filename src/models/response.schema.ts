import * as mongoose from "mongoose";
import { Schema, model, Model, Document, SchemaTypes } from "mongoose";
import * as mongoosePaginate from "mongoose-paginate-v2";
import Issues from "../models/issues.schema";
import Users from "./user.schema";
const ResponseSchema: Schema = new Schema(
  {
    userId: {
      type: SchemaTypes.ObjectId,
      ref: Users,
    },
    issueId: {
      type: SchemaTypes.ObjectId,
      ref: Issues,
    },
    comment: {
      type: String,
      default: null,
    },
    fromPatient: {
      type: Boolean,
      default: true,
    },
    isArchived: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
// defining interface
export interface IResponse extends Document {
  userId: any;
  comment: string;
  fromPatient: boolean;
  isArchived: boolean;
  issueId: any;
}

mongoose.plugin(mongoosePaginate);
// Define the mongoose document from the schema
const Responses: mongoose.PaginateModel<IResponse> = model(
  "responses",
  ResponseSchema
);
export default Responses;
