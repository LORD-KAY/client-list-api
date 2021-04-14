import { Schema, model, Document, Model, SchemaTypes } from "mongoose";
const ProviderSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
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
const Providers: Model<IProvider> = model<IProvider>(
  "providers",
  ProviderSchema
);

export default Providers;
