import { Button, Center, Heading, Stack, Text } from "@chakra-ui/react";
import StarIcon from "./icons/star.icon";

export default () => {
    return (
        <>
            <Center minH='100dvh' flexDirection={"column"} gap={2}>

                <Text>Welcome to your starter</Text>
                <Heading>Next.js + ChakraUI</Heading>

                <Stack direction={'row'} spacing={4}>
                    <Button bg={"black"} color={"white"} borderRadius={'full'} px={6} _hover={{ background: 'black' }}>Explore</Button>
                    <Button><StarIcon /></Button>
                </Stack>
            </Center>

            <Text color={'gray.400'} fontWeight={'semibold'} position={'absolute'} left={20} bottom={20} fontFamily={'Syne Variable'}>!NobbyDev SST</Text>
        </>
    );
}