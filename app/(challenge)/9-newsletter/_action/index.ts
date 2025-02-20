'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { FormNewsletterSchema, type TFormNewsletterData } from './schema'

export async function signUpNewsletterAction(prevState: unknown, formData: TFormNewsletterData) {
  const validationSchema = FormNewsletterSchema.safeParse(formData)

  if (!validationSchema.success) {
    return {
      message: validationSchema.error.issues[0].message,
      sucess: false,
    }
  }

  const cookieStore = await cookies()
  cookieStore.delete('userEmail')

  cookieStore.set('userEmail', formData.email, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 5, // 5 minutes
  })

  redirect('/9-newsletter/thank-you')
}
