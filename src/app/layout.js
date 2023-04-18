import './globals.css'
// import Head from '@/app/head'
import Header from '@/components/header'

// export const metadata = {
//   title:,

// }

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">   
      <body>
        {/* header */}
        <Header/>
        {/* navbar */}
        {/* searchbox */}
        {children}
      </body>
    </html>
    </>
  )
}
