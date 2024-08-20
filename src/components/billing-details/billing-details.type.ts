import { z } from 'zod'

export const email = z.string().email('error.email')
export const password = z.string().nonempty('This is required').min(8, { message: 'error.password' })

export const phoneNumber  = z
    .string()
    .min(8, 'error.phoneNumber.min')
    .max(12, 'error.phoneNumber.max')
    .optional()
    .or(z.literal(''))

export const billingAddressFormSchema = z.object({
    firstName: z.string(),
    companyName: z.string(),
    streetAddress: z.string(),
    apartmentFloor: z.string(),
    city: z.string(),
    phoneNumber,
    email
})
