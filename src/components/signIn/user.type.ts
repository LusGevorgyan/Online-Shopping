import { z } from 'zod'

export const email = z.string().email('error.email')
export const password = z.string().nonempty('This is required').min(8, { message: 'error.password' })

export const userFormSchema = z.object({
    name: z.string(),
    email,
    password
})
