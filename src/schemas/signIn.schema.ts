import {z} from 'zod';

export const signInSchema = z.object({
  username: z.string(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must not exceed 64 characters'),
});

export type signInValues = z.infer<typeof signInSchema>;
