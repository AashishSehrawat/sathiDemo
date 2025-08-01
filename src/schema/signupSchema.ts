import {z} from "zod";

const baseUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["student", "mentor"]),
});


export const studentSignupSchema = baseUserSchema.extend({
    role: z.literal("student"),
    school: z.string().min(2),
    standard: z.string().min(1),
    dob: z.date(),
})
