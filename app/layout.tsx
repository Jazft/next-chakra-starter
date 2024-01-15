import { fonts } from '@/config/chakra.fonts'
import { Providers } from './providers'

export default function RootLayout({ children, }: { children: React.ReactNode, }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={fonts.rubik.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}