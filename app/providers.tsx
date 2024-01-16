// app/providers.tsx
'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    config: {
        cssVarPrefix: "chk",
    },
    fonts: {
        heading: `'Syne Variable', sans-serif`,
        body: `'Rubik', sans-serif`,
    },
});

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}