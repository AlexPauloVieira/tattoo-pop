import {
  Flex,
  HStack,
  Stack,
  Text,
  Box,
  LinkProps as ChakraLinkProps,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";
import landingImage from "../core/assets/landingImage.svg";
import appStore from "../core/assets/appStore.svg";
import playStore from "../core/assets/playStore.svg";

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
          <Box mr='-10'>
            <Image height={400} src={landingImage} alt='App Image' />
          </Box>
          <Image src={landingImage} alt='App Image' />
        </HStack>
        <Stack ml='81px' mt='35vh'>
          <Text
            fontFamily='Rajdhani'
            fontSize='40px'
            fontWeight={600}
            lineHeight='51px'
          >
            Algo aqui sobre o app <br /> em 2 linhas - gratuito
          </Text>

          <Text
            fontFamily='Open Sans'
            fontSize='16px'
            fontWeight={400}
            color='#E0E0E0'
            lineHeight='180%'
            width='600px'
          >
            Breve descrição sobre as funcionalidades do app, tanto para o
            cliente final, quanto para o tatuador. Conexões, conheça, descubra,
            algo em até três <br /> linhas de texto, para não ficar muito forte.
          </Text>

          <Box w='600px'>
            <Text
              fontFamily='Open Sans'
              fontSize='16px'
              fontWeight={400}
              color='#E0E0E0'
              mt='25px'
            >
              Comece agora
            </Text>
            <HStack mt='-140px'>
              <Center mr='30'>
                <Image height={400} src={playStore} alt='Play Store Image' />
              </Center>
              <Image height={400} src={appStore} alt='Apple Store Image' />
            </HStack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
