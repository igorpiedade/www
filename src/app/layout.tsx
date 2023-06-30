import './globals.css'
import { ReactNode } from 'react'
import Header from './components/Header'

import { Bitter, Roboto_Flex as RobotoFlex } from 'next/font/google'
const fontBody = RobotoFlex({
  subsets: ['latin'],
  variable: '--font-body',
})
const fontNavMenu = Bitter({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-nav',
})

export const metadata = {
  title: 'Igor Piedade',
  description: 'Igor Piedade - Full Stack Developer',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${fontBody.variable} ${fontNavMenu.variable} font-body`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
