import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email({ message: 'Valid email required' }),
})

export const FormNewsletterSchema = formSchema
export type TFormNewsletterData = z.infer<typeof FormNewsletterSchema>
