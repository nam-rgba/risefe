import * as z from "zod";

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(1),
});


const registerSchema = z.object({
  email: z.email(),
  password: z.string().min(1),
  confirmPassword: z.string().min(1),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export { loginSchema, registerSchema };
