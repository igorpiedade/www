import './globals.css'
import { ReactNode } from 'react'
import Header from './components/Header'

import {
  Bitter,
  Roboto_Flex as RobotoFlex,
  Bebas_Neue as BebasNeue,
} from 'next/font/google'

const fontBody = RobotoFlex({
  subsets: ['latin'],
  variable: '--font-body',
})
const fontNavMenu = Bitter({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-nav',
})

const logo = BebasNeue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-logo',
})

export const metadata = {
  title: 'Igor Piedade',
  description: 'Igor Piedade - Full Stack Developer',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${fontBody.variable} ${fontNavMenu.variable} ${logo.variable} overflow-x-hidden font-body`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
