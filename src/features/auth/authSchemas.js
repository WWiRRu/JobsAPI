import { z } from 'zod';

const loginSchema = z.object({ email: z.string().trim().email(), password: z.string().trim().min(8)});
const registerSchema = z.object({name: z.string().trim().min(3).max(50), email: z.string().trim().email(), password: z.string().trim().min(8),});

export { loginSchema, registerSchema };