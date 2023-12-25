import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { SpeedInsights } from '@vercel/speed-insights/next';


const roboto = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'ua',
  description: 'welcome!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
