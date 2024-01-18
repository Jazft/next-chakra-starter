import { fonts } from '@/config/chakra.fonts'
import "@/css/main.css"
import "@fontsource-variable/syne"
import { Providers } from './providers'

export const metadata = {
  title: 'Next.js 14 + ChakraUI',
  openGraph: {
    title: 'Next.js 14 + ChakraUI',
    description: 'A SST using Next.js 14 / ChakraUI and Turbopack. By !NobbyDev.',
  },
}

export default function RootLayout({ children, }: { children: React.ReactNode, }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={fonts.rubik.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}