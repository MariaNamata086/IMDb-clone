import './globals.css'
import Providers from './providers'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import Search from '@/components/search'

export const metadata = {
  title:'IMDb-clone',
  description:'This is the IMDb clone'
}

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
        <Search/>
        {children}
        </Providers>
      </body>
    </html>
    </>
  )
}
