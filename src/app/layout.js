import { Inter } from 'next/font/google'
import './globals.css';
import localFont from 'next/font/local';

const Konexy = localFont({
  src: [{
    path:'./assets/fonts/roz.otf'
  }],
  variable: 'Konexy'
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ajay ✌️',
  description: 'Trust Me! I made this myself',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Konexy.className}>{children}</body>
    </html>
  )
}
