import bcrypt from "bcryptjs";
import mongoose, { Document, Model, model, models, Schema } from "mongoose";

// Admin.ts
interface IAdmin extends Document {
  _id: mongoose.Types.ObjectId;

  email: string;
  password: string;
  name: string;
  role: "admin";
  createdAt?: Date;
  updatedAt?: Date;
}

const adminSchema = new Schema<IAdmin>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ["admin"], default: "admin" },
});

adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const Admin =
  (models.Admin as Model<IAdmin>) || model<IAdmin>("Admin", adminSchema);
export default Admin;
