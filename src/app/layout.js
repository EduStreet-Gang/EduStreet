import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: 'EduStreet',
  description: 'E-Learning bla bla bla',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-edustreet-white`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
