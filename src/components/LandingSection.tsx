import {
  Flex,
  HStack,
  Stack,
  Text,
  Box,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import landingImage from "../core/assets/landingImage.svg";
import Image from "next/image";

interface LandingSectionProps extends ChakraLinkProps {
  id: string;
  color: string;
}

export default function LandingSection({ id, color }: LandingSectionProps) {
  return (
    <>
      <Flex
        w='100%'
        maxWidth={1480}
        h='100vh'
        mx='auto'
        px='6'
        bg={color}
        borderBottomColor='gray.500'
        borderBottomWidth='thin'
        id={id}
      >
        <HStack ml='5vw' mt='10vh'>
          <Box mr='1px'>
            <Image height={360} src={landingImage} alt='App Image' />
          </Box>
          <Image src={landingImage} alt='App Image' />
        </HStack>
        <Stack ml='81px' mt='35vh'>
          <Box w='600px'>
            <Text
              fontFamily='Rajdhani'
              fontSize='40px'
              fontWeight={600}
              lineHeight='51px'
            >
              Algo aqui sobre o app <br /> em 2 linhas - gratuito
            </Text>
          </Box>
          <Box w='600px'>
            <Text
              fontFamily='Open Sans'
              fontSize='16px'
              fontWeight={400}
              color='#E0E0E0'
              lineHeight='180%'
            >
              Breve descrição sobre as funcionalidades do app, tanto para o
              cliente final, quanto para o tatuador. Conexões, conheça,
              descubra, algo em até três <br /> linhas de texto, para não ficar
              muito forte.
            </Text>
          </Box>
          <Box w='600px'>
            <Text
              fontFamily='Open Sans'
              fontSize='16px'
              fontWeight={400}
              color='#E0E0E0'
              lineHeight='180%'
              mt='25px'
            >
              Comece agora
            </Text>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
