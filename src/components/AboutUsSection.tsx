import {
  Flex,
  HStack,
  Stack,
  Box,
  LinkProps as ChakraLinkProps,
  Text,
  Center,
} from "@chakra-ui/react";
import roundedImage from "../core/assets/roundedImage.svg";
import Image from "next/image";

interface AboutUsSectionProps extends ChakraLinkProps {
  id: string;
  color: string;
}

export default function AboutUsSection({ id, color }: AboutUsSectionProps) {
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
        <HStack ml='10vw' mt='10vh'>
          <Box
            border='1px solid white'
            borderRadius='50%'
            width={400}
            height={400}
          >
            <Image
              src={roundedImage}
              alt='App Image'
              width={400}
              height={400}
            />
          </Box>
        </HStack>
        <Stack ml='162px' mt='35vh'>
          <Box w='600px' pb='6'>
            <Text
              fontFamily='Rajdhani'
              fontSize='40px'
              fontWeight={600}
              lineHeight='51px'
            >
              Encontre os melhores <br /> tatuadores COPY
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
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
