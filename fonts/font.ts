import {
  Barlow_Semi_Condensed,
  Figtree,
  Fraunces,
  Inter,
  Manrope,
  Montserrat,
  Outfit,
  Overpass,
  Poppins,
  Raleway,
  Roboto,
  Rubik,
  Space_Mono,
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

const barlow = Barlow_Semi_Condensed({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

const manrope = Manrope({
  display: 'swap',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
})

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

const rubik = Rubik({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik',
})

const spacemono = Space_Mono({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-spacemono',
})

const overpass = Overpass({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-overpass',
})

export {
  barlow,
  figtree,
  fraunces,
  inter,
  manrope,
  montserrat,
  outfit,
  overpass,
  poppins,
  raleway,
  roboto,
  rubik,
  spacemono,
  young,
}
