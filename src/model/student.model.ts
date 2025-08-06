import bcrypt from "bcryptjs";
import mongoose, { Document, Model, Schema, model, models } from "mongoose";

interface IStudent extends Document {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  name: string;
  role: "student";
  school: string;
  standard: string;
  dob: Date;
  createdAt?: Date;
  updatedAt?: Date;
  // interests?: string[];
}

const studentSchema = new Schema<IStudent>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: /\S+@\S+\.\S+/,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student"],
      default: "student",
    },
    school: {
      type: String,
      required: true,
    },
    standard: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    // interests: [String],
  },
  { timestamps: true }
);

studentSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const Student =
  (models?.Student as Model<IStudent>) ||
  model<IStudent>("Student", studentSchema);
export default Student;
