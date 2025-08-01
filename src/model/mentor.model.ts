import mongoose, { Document, Model, Schema, model, models } from "mongoose";

interface IMentor extends Document {
  email: string;
  password: string;
  name: string;
  role: "mentor";
  expertise: string[];
  experience: string;
  availability: string;
}

const mentorSchema = new Schema<IMentor>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: /\S+@\S+\.\S+/,
    },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, enum: ["mentor"], default: "mentor" },
    expertise: [String],
    experience: { type: String, required: true },
    availability: { type: String, required: true },
  },
  { timestamps: true }
);

const Mentor =  models.Mentor as Model<IMentor> || model<IMentor>("Mentor", mentorSchema);
export default Mentor;
