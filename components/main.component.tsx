import { Button, Center, Heading, Stack, Text } from "@chakra-ui/react";
import StarIcon from "./icons/star.icon";
import ThemeSwitcher from "./theme.switcher";

export default () => {
    return (
        <>
            <Center minH='100dvh' flexDirection={"column"} gap={2}>

                <Text>Welcome to your starter</Text>
                <Heading>Next.js + ChakraUI</Heading>

                <Stack direction={'row'} spacing={4}>

                    <ThemeSwitcher />
                    <Button>
                        <a href="">
                            <StarIcon />
                        </a>
                    </Button>

                </Stack>
            </Center>

        </>
    );
}