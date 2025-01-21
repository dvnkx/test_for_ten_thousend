import {z} from 'zod';

export const signInSchema = z.object({
  email: z.string().email('Invalid Email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must not exceed 64 characters')
    .regex(/[A-Z]/, 'Password must include at least one uppercase letter')
    .regex(/[a-z]/, 'Password must include at least one lowercase letter')
    .regex(/[0-9]/, 'Password must include at least one number')
    .regex(/[\W_]/, 'Password must include at least one special character'),
});

export type signInValues = z.infer<typeof signInSchema>;
