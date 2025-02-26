'use client'

import iconPeople from '@/assets/11-tip-calculator/icon-person.svg'
import MotionSlot from '@/components/shared/_components/motion-slot'
import { buttonVariants } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { spacemono } from '@/fonts/font'
import { cn, formatCurrency } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import TipDisplay from './tip-display'

const formSchema = z.object({
  bill: z.number().min(0, 'Bill cannot be negative'),
  tipPercentage: z.union([
    z.enum(['5', '10', '15', '25', '50']),
    z
      .string()
      .regex(/^\d+$/, 'Deve ser um número')
      .refine(val => Number.parseInt(val) <= 100, {
        message: 'Máximo de 100%',
      }),
  ]),
  numberOfPeople: z.coerce.number().min(1, "Can't be zero"),
})

type FormData = z.infer<typeof formSchema>

const FormTip = () => {
  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)
  const [customTip, setCustomTip] = useState('')

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange', // valida a cada mudança
    defaultValues: { bill: 0, tipPercentage: '', numberOfPeople: 1 },
  })

  const parseCurrency = (value: string) => {
    const digits = value.replace(/\D/g, '')
    return digits ? Number.parseInt(digits, 10) : undefined
  }

  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '') // Remove caracteres não numéricos
    if (value === '') {
      setCustomTip('')
      form.setValue('tipPercentage', '')
      form.clearErrors('tipPercentage')
      return
    }
    let numericValue = Number.parseInt(value, 10)
    if (numericValue > 100) {
      numericValue = 100 // Força o limite máximo
    }
    setCustomTip(numericValue.toString()) // Atualiza o state do input para refletir o valor correto
    form.setValue('tipPercentage', numericValue.toString())
    form.clearErrors('tipPercentage')
  }

  const handleRadioChange = (value: string) => {
    if (['5', '10', '15', '25', '50'].includes(value)) {
      form.setValue('tipPercentage', value)
      setCustomTip('') // Limpa o input custom quando um radio é selecionado
    }
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleReset = () => {
    form.reset({ bill: 0, tipPercentage: '', numberOfPeople: 1 })
    setTipAmount(0)
    setTotal(0)
  }

  const tipWatch = form.watch('tipPercentage')
  const billWatch = form.watch('bill')
  const numberOfPeopleWatch = form.watch('numberOfPeople')

  useEffect(() => {
    const calculatorTip = () => {
      const tipPercentage = Number.parseInt(tipWatch, 10)
      const total = (billWatch * tipPercentage) / 100
      const tipAmount = total / numberOfPeopleWatch
      if (!numberOfPeopleWatch) {
        setTipAmount(0)
        setTotal(0)
      } else {
        setTipAmount(tipAmount)
        setTotal(total)
      }
    }

    calculatorTip()
  }, [tipWatch, billWatch, numberOfPeopleWatch])

  return (
    <Form {...form}>
      <form className={`w-full max-w-[920px] ${spacemono.className}`} onSubmit={onSubmit}>
        <MotionSlot asChild staggerConfig={{ staggerChildren: 0.2, when: 'beforeChildren' }}>
          <Card className="grid gap-8 p-8 lg:grid-cols-2">
            <MotionSlot asChild isNested staggerConfig={{ staggerChildren: 0.2 }}>
              <div className="flex h-full flex-col gap-8">
                <FormField
                  control={form.control}
                  name="bill"
                  render={({ field }) => (
                    <MotionSlot asChild isNested direction="left">
                      <FormItem>
                        <FormLabel className="font-semibold">Bill</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-2xl text-muted-foreground peer-disabled:opacity-50">
                              $
                            </span>
                            <Input
                              className="!text-2xl h-12 text-right font-bold text-[#00494d] placeholder:text-[#00494d]"
                              placeholder="0"
                              value={formatCurrency(field.value)}
                              onChange={e => field.onChange(parseCurrency(e.target.value))}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </MotionSlot>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tipPercentage"
                  render={({ field }) => (
                    <MotionSlot
                      asChild
                      isNested
                      direction="left"
                      staggerConfig={{ staggerChildren: 0.2 }}
                    >
                      <FormItem>
                        <FormLabel className="font-semibold">Select Tip %</FormLabel>
                        <FormControl>
                          <RadioGroup
                            className="grid grid-cols-2 gap-4 space-y-0 lg:grid-cols-3"
                            value={field.value}
                            onValueChange={handleRadioChange}
                          >
                            {['5', '10', '15', '25', '50'].map(value => (
                              <MotionSlot
                                key={value}
                                asChild
                                isNested
                                scaleEffect
                                initialScale={0.75}
                              >
                                <FormItem className="space-y-0">
                                  <FormControl>
                                    <RadioGroupItem
                                      id={`tip-${value}`}
                                      value={value}
                                      className="peer sr-only"
                                    />
                                  </FormControl>
                                  <FormLabel
                                    htmlFor={`tip-${value}`}
                                    className={cn(
                                      buttonVariants({
                                        variant: 'outline',
                                      }),
                                      'h-12 w-full bg-[#00494d] font-bold text-white text-xl transition-all hover:bg-[#26c0ab] peer-checked:text-[#00494d] peer-data-[state=checked]:scale-110 peer-data-[state=checked]:bg-[#26c0ab] peer-data-[state=checked]:text-[#00494d]'
                                    )}
                                  >
                                    {value}%
                                  </FormLabel>
                                </FormItem>
                              </MotionSlot>
                            ))}
                            <MotionSlot asChild isNested scaleEffect initialScale={0.75} offset={0}>
                              <FormItem>
                                <FormControl>
                                  <Input
                                    placeholder="Custom"
                                    value={customTip}
                                    onChange={handleCustomTipChange}
                                    onFocus={() => {
                                      setCustomTip('')
                                      form.setValue('tipPercentage', '')
                                    }}
                                    className="h-12 text-center font-bold text-2xl placeholder:text-2xl"
                                  />
                                </FormControl>
                              </FormItem>
                            </MotionSlot>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    </MotionSlot>
                  )}
                />
                <FormField
                  control={form.control}
                  name="numberOfPeople"
                  render={({ field, fieldState }) => (
                    <MotionSlot asChild isNested direction="left">
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel className="font-semibold">Number of People</FormLabel>
                          <FormMessage />
                        </div>
                        <FormControl>
                          <div className="relative">
                            <Image
                              className="-translate-y-1/2 absolute inset-y-0 start-0 top-1/2 ps-3"
                              src={iconPeople}
                              alt="people"
                              width={24}
                              height={24}
                            />
                            <Input
                              className={`!text-2xl h-12 text-right font-bold text-[#00494d] placeholder:text-[#00494d] ${fieldState.error ? 'border-[#ff6257]/80 focus-visible:ring-[#ff6257]' : ''}`}
                              placeholder="1"
                              value={field.value === 0 ? '0' : field.value} // Exibe vazio quando for 0
                              onChange={e => {
                                const value = e.target.value.replace(/\D/g, '') // Mantém apenas números
                                if (value === '') {
                                  field.onChange(0) // Define como 0 ao apagar tudo
                                } else {
                                  field.onChange(Number(value)) // Atualiza normalmente
                                }
                              }}
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    </MotionSlot>
                  )}
                />
              </div>
            </MotionSlot>
            <TipDisplay total={total} tipAmount={tipAmount} onReset={handleReset} />
          </Card>
        </MotionSlot>
      </form>
    </Form>
  )
}

export default FormTip
