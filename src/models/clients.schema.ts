import * as mongoose from "mongoose";
import { Schema, model, Document, SchemaTypes } from "mongoose";
import * as mongoosePaginate from "mongoose-paginate-v2";
const ClientSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    providers: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

// defining database
export interface IClient extends Document {
  name: string;
  email: string;
  phone: string;
}
mongoose.plugin(mongoosePaginate);
// exporting client document from the schema
const Clients: mongoose.PaginateModel<IClient> = model("clients", ClientSchema);

export default Clients;
