import './globals.css'
import Providers from './providers'
import Header from '@/components/header'
import Navbar from '@/components/navbar'


export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">   
      <body>
        <Providers>
        {/* header */}
        <Header/>
        {/* navbar */}
        <Navbar/>
        {/* searchbox */}
        {children}
        </Providers>
      </body>
    </html>
    </>
  )
}
