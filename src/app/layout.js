import './globals.css'
import Providers from './providers'
import Header from '@/components/header'



export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">   
      <body>
        <Providers>
        {/* header */}
        <Header/>
        {/* navbar */}
        {/* searchbox */}
        {children}
        </Providers>
      </body>
    </html>
    </>
  )
}
