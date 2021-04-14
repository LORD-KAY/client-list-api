import * as mongoose from "mongoose";
import Users from "./user.schema";
import { Schema, model, Document, SchemaTypes } from "mongoose";
import * as mongoosePaginate from "mongoose-paginate-v2";
const IssueSchema: Schema = new Schema(
  {
    userId: {
      type: SchemaTypes.ObjectId,
      ref: Users,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    dateStarted: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);
// defining interface
export interface IUser extends Document {
  title: string;
  content: string;
  dateStarted: string;
}
mongoose.plugin(mongoosePaginate);
// Define the mongoose document from the schema
const Issues: mongoose.PaginateModel<IUser> = model("issues", IssueSchema);
export default Issues;
