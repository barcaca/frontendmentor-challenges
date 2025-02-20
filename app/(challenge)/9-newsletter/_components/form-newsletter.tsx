'use client'

import MotionSlot from '@/components/shared/_components/motion-slot'
import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircleIcon } from 'lucide-react'
import { startTransition, useActionState } from 'react'
import { useForm } from 'react-hook-form'
import { signUpNewsletterAction } from '../_action'
import { FormNewsletterSchema, type TFormNewsletterData } from '../_action/schema'

const FormNewsletter = () => {
  const [formState, formAction, isPending] = useActionState(signUpNewsletterAction, undefined)
  const form = useForm<TFormNewsletterData>({
    resolver: zodResolver(FormNewsletterSchema),
    defaultValues: { email: '' },
  })

  const { handleSubmit } = form

  async function onSubmit(formData: TFormNewsletterData) {
    startTransition(() => formAction(formData))
  }
  const trueIs = true

  return (
    <Form {...form}>
      <MotionSlot
        asChild
        isNested
        offset={0}
        staggerConfig={{ staggerChildren: 0.4, when: 'beforeChildren' }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardFooter className="flex flex-col space-y-6 p-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <MotionSlot asChild isNested direction="left">
                  <FormItem className="w-full">
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-[#242742]">Email address</FormLabel>
                      <FormMessage className="text-sm leading-none" />
                    </div>
                    <FormControl>
                      <Input
                        className={`${fieldState.error ? 'border-[#ff6257]/80 bg-[#ff6257]/10 text-[#ff6257] focus-visible:ring-[#ff6257]' : ''} h-14`}
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                </MotionSlot>
              )}
            />
            <MotionSlot asChild isNested direction="right">
              <Button
                type="submit"
                className="h-14 w-full bg-[#242742] from-[#FF5476] to-[#FF693E] shadow-md transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:shadow-[#ff6257]/50 hover:shadow-lg"
                disabled={isPending}
              >
                {isPending ? (
                  <span className="flex items-center gap-2">
                    Subscribing... <LoaderCircleIcon className="animate-spin" />{' '}
                  </span>
                ) : (
                  <span>Subscribe to monthly newsletter</span>
                )}
              </Button>
            </MotionSlot>
          </CardFooter>
        </form>
      </MotionSlot>
    </Form>
  )
}

export default FormNewsletter
