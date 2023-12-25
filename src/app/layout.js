import { Inter } from 'next/font/google'
import './globals.css';
import localFont from 'next/font/local';


const roz = localFont({
  src: [{
    path:'./assets/fonts/roz.otf'
  }],
  variable: 'roz'
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ajay ✌️',
  description: 'Trust Me! I made this myself',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roz.className}`}>{children}</body>
    </html>
  )
}
