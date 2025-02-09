import {
  Figtree,
  Fraunces,
  Inter,
  Montserrat,
  Outfit,
  Poppins,
  Raleway,
  Young_Serif,
} from 'next/font/google'

export const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})
export const raleway = Raleway({
  display: 'swap',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-raleway',
})

export const outfit = Outfit({
  display: 'swap',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-outfit',
})

export const figtree = Figtree({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-figtree',
})

export const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const young = Young_Serif({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
  variable: '--font-young',
})

export const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

export const fraunces = Fraunces({
  display: 'swap',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-fraunces',
})
