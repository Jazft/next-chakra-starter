// app/providers.tsx
'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    config: {
        cssVarPrefix: "chk",
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    fonts: {
        heading: `'Syne Variable', sans-serif`,
        body: `'Rubik', sans-serif`,
    },
    styles: {
        global: (props) => ({
            'html, body': {
                bg: props.colorMode === 'light' ? 'white' : 'neutral.600',
                lineHeight: 'tall',
            },
            a: {
                color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
            },
        }),
    },
});

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}