import {z} from "zod";

const baseUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email("Please enter valid email"),
  password: z.string().min(6, {
    message: "Password at least be of 6 characters"
  }),
  role: z.enum(["student", "mentor","admin"]),
});


export const studentRegisterSchema = baseUserSchema.extend({
    role: z.literal("student"),
    school: z.string().min(2),
    standard: z.string().min(1),
    dob: z.date().refine(date => date <= new Date(), {
      message: "Please enter valid dob"
    }),
})

