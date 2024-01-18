// app/providers.tsx
'use client'

import { ChakraProvider, extendTheme, } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
    fonts: {
        heading: `'Syne Variable', sans-serif`,
        body: `'Rubik', sans-serif`,
    },
    styles: {
        global: props => ({
            body: {
                color: mode('#101010', 'whiteAlpha.900')(props),
                bg: mode('gray.100', '#141214')(props),
            },
        }),

    },
});

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}