import { z } from "zod";

const baseUserSchema = z.object({
  name: z.string().min(2, {
    message: "Name at least of 2 characters"
  }),
  email: z.string().email("Please enter valid email"),
  password: z.string().min(6, {
    message: "Password at least be of 6 characters",
  }),
  role: z.enum(["student", "mentor", "admin"]),
});

export const studentRegisterSchema = baseUserSchema.extend({
  role: z.literal("student"),
  school: z.string().min(2, {
    message: "School at least of 2 characters"
  }),
  standard: z.string().min(1, {
    message: "Standard at least of 1 characters"
  }),
  dob: z
  .string()
  .refine((val) => new Date(val) <= new Date(), {
    message: "Please enter valid dob",
  })
});
