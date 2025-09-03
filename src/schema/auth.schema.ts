import * as z from "zod";

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(1, { message: "Password is required" }),
});


const strongPasswordSchema = z.string()
.min(8, "Password must be at least 8 characters long")
.refine((val)=>/[A-Z]/.test(val), {
    message: "Password must contain at least one uppercase letter",
})
.refine((val)=>/[a-z]/.test(val), {
    message: "Password must contain at least one lowercase letter",
})
.refine((val)=>/[0-9]/.test(val), {
    message: "Password must contain at least one number",
})
 .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
    message: "Phải có ít nhất 1 ký tự đặc biệt",
  });

const registerSchema = z.object({
  email: z.email(),
  password: strongPasswordSchema,
  confirmPassword: z.string().min(1,{message: "Confirm Password is required"}),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});


export type LoginSchemaType = z.infer<typeof loginSchema>;
export type RegisterSchemaType = z.infer<typeof registerSchema>;
export { loginSchema, registerSchema };
