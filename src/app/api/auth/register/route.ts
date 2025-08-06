import { asyncHandler } from "@/lib/asyncHandler";
import dbConnect from "@/lib/dbConnect";
import Student from "@/model/student.model";
import { studentRegisterSchema } from "@/schema/registerSchema";
import { error } from "console";
import { NextResponse } from "next/server";

export const POST = asyncHandler(async (req: Request) => {
  const body = await req.json();
  // use zod to validate the input
  const parsed = studentRegisterSchema.parse(body);

  const {
    email,
    password,
    name,
    role = "student",
    school,
    standard,
    dob,
  } = parsed;

  await dbConnect();
  const existingUser = await Student.findOne({ email });
  if (existingUser) {
    return NextResponse.json(
      { success: false, error: "User already exists" },
      { status: 400 }
    );
  }

  const user = await Student.create({
    email,
    password,
    name,
    role,
    school,
    standard,
    dob,
  });

  return NextResponse.json(
    { success: true, message: "User created successfully", user },
    { status: 200 }
  );
});
