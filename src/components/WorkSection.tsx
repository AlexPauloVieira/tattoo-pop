import {
  Flex,
  HStack,
  Stack,
  Box,
  LinkProps as ChakraLinkProps,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";
import roundedImageTwo from "../core/assets/roundedImageTwo.svg";
import Image from "next/image";

interface WorkSectionProps extends ChakraLinkProps {
  id: string;
  color: string;
}

export default function WorkSection({ id, color }: WorkSectionProps) {
  return (
    <>
      <Flex
        w='100%'
        maxWidth={1480}
        h='100vh'
        mx='auto'
        bg={color}
        borderBottomColor='gray.500'
        borderBottomWidth='thin'
        id={id}
      >
        <Stack ml='162px' mt='35vh'>
          <Box w='600px' pb='6'>
            <Text
              fontFamily='Rajdhani'
              fontSize='40px'
              fontWeight={600}
              lineHeight='51px'
            >
              Divulgue o seu trabalho para <br /> o mundo inteiro.
            </Text>
            <Center
              width='270px'
              height='6px'
              borderBottom='4px solid #00DAE9'
            ></Center>
          </Box>
          <Box w='600px'>
            <Text
              fontFamily='Open Sans'
              fontSize='16px'
              fontWeight={400}
              color='#E0E0E0'
              lineHeight='180%'
            >
              Oferecemos a solução completa para que você fique conectado <br />
              com seus clientes a qualquer momento, desde a publicação do <br />
              app até até a publicação.
            </Text>
            <Button
              display='flex'
              flexDirection='row'
              alignItems='center'
              py='12px'
              px='64px'
              mt='32px'
              position='absolute'
              width='230px'
              height='45px'
              bg='gray.900'
              color='#00DAE9'
              border='1px solid #00DAE9'
              boxSizing='border-box'
              borderRadius='4px'
              _hover={{ bg: "#2d426d", color: "#fff", borderColor: "#2d426d" }}
            >
              <Text>Começar agora</Text>
            </Button>
          </Box>
        </Stack>
        <HStack ml='5vw' mt='10vh'>
          <Box
            border='1px solid white'
            borderRadius='50%'
            width={400}
            height={400}
          >
            <Image
              src={roundedImageTwo}
              alt='App Image'
              width={400}
              height={400}
            />
          </Box>
        </HStack>
      </Flex>
    </>
  );
}
