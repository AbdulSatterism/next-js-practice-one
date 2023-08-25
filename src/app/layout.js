
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "400", "500", "700"],

})

export const metadata = {
  title: 'Next Hero',
  description: 'Next Hero',
}

const RootLayout = ({ children }) => {

  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}

      </body>
    </html>
  )
}

export default RootLayout;
