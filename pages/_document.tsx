import Favicon from '@/components/Favicon'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="fonts/Inter-Black.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="fonts/Inter-Light.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <Favicon />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
