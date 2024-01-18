import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function () {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Button onClick={toggleColorMode} bg={useColorModeValue('blackAlpha.800', 'whiteAlpha.300')} color={"white"} borderRadius={'full'} px={6} _hover={{ background: 'inline' }}>
                {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
        </>
    )
}