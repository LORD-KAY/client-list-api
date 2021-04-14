import { Schema, model, Model, Document, SchemaTypes } from "mongoose";
import * as mongoose from "mongoose";
import * as mongoosePaginate from "mongoose-paginate-v2";
import Users from "./user.schema";
const PatientSchema: Schema = new Schema(
  {
    contact: {
      type: String,
      default: null,
    },
    salutation: String,
    doctorId: {
      type: SchemaTypes.ObjectId,
      ref: Users,
    },
    userId: {
      type: SchemaTypes.ObjectId,
      ref: Users,
    },
    nextOfKin: {
      type: SchemaTypes.Mixed,
      default: null,
    },
    emergencyContact: {
      type: SchemaTypes.Mixed,
      default: null,
    },
  },
  { timestamps: true }
);
// defining interface
export interface IPatient extends Document {
  contact: string;
  salutation: string;
}

mongoose.plugin(mongoosePaginate);

// Define the mongoose document from the schema
const Patients: mongoose.PaginateModel<IPatient> = model(
  "patients",
  PatientSchema
);
export default Patients;
