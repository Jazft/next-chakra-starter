import { fonts } from '@/config/chakra.fonts'
import "@/css/main.css"
import "@fontsource-variable/syne"
import { Providers } from './providers'

export const metadata = {
  title: 'Next.js 14+ ChakraUI',
  openGraph: {
    title: 'Next.js 14 + ChakraUI | Starting Template',
    description: 'Starting Template using Next.js 14 - ChakraUI with Turbopack Incluided.',
  },
}

export default function RootLayout({ children, }: { children: React.ReactNode, }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head><meta name="description" content="Starting Template using Next.js 14 - ChakraUI with Turbopack Incluided." /></head>
      <body className={fonts.rubik.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}