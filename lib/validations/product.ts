import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
  brand: z.string().optional(),
  categoryId: z.string(),
  gender: z.string(),
})