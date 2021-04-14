import * as mongoose from "mongoose";
import { Schema, model, Model, Document } from "mongoose";
import * as mongoosePaginate from "mongoose-paginate-v2";
const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
      default: false,
    },
    lastName: {
      type: String,
      default: false,
    },
    email: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      min: 6,
      required: true,
    },
    isUserNew: {
      type: Boolean,
      default: true,
    },
    userType: {
      type: String,
      enum: ["doctor", "patient"],
      default: "patient",
    },
    lastLoggedIn: {
      type: String,
      default: null,
    },
    isPatient: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
// defining interface
export interface IUser extends Document {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  email?: string;
  userType: string;
  lastLoggedIn: boolean;
  isPatient: boolean;
}
mongoose.plugin(mongoosePaginate);
// Define the mongoose document from the schema
const Users: mongoose.PaginateModel<IUser> = model("users", UserSchema);
export default Users;
