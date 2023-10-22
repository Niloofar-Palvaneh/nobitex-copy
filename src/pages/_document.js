import Navbar from '@/components/navbar/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fa">
      <Head />
      <body>
        <Navbar/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
