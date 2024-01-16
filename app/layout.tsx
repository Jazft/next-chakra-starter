import { fonts } from '@/config/chakra.fonts'
import { Providers } from './providers'
import "@fontsource-variable/syne"

export default function RootLayout({ children, }: { children: React.ReactNode, }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={fonts.rubik.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}