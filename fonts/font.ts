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

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})
const raleway = Raleway({
  display: 'swap',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-raleway',
})

const outfit = Outfit({
  display: 'swap',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-outfit',
})

const figtree = Figtree({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-figtree',
})

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

const young = Young_Serif({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
  variable: '--font-young',
})

const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

const fraunces = Fraunces({
  display: 'swap',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-fraunces',
})

export { figtree, fraunces, inter, montserrat, outfit, poppins, raleway, young }
