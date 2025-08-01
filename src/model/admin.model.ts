import { Document, Model, model, models, Schema } from "mongoose";

// Admin.ts
interface IAdmin extends Document {
  email: string;
  password: string;
  name: string;
  role: 'admin';
}

const adminSchema = new Schema<IAdmin>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['admin'], default: 'admin' },
});

const Admin =  models.Admin as Model<IAdmin> || model<IAdmin>('Admin', adminSchema);
export default Admin;