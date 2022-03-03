import Link from "next/link";
import { Flex, HStack, Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='12vh'
      mx='auto'
      align='center'
      justify='space-evenly'
      bg='gray.900'
      borderBottomColor='gray.500'
      borderBottomWidth='thin'
      position='fixed'
      zIndex={99}
    >
      <HStack ml='250'>
        <Link href='#home' passHref>
          <ChakraLink
            display='flex'
            color='white'
            _hover={{ color: "#4882f8" }}
          >
            <Text fontSize={16} mr='4'>
              Home
            </Text>
          </ChakraLink>
        </Link>
        <Link href='#about-us' passHref>
          <ChakraLink
            display='flex'
            color='white'
            _hover={{ color: "#4882f8" }}
          >
            <Text fontSize={16} mr='4'>
              Quem Somos
            </Text>
          </ChakraLink>
        </Link>
        <Link href='#download' passHref>
          <ChakraLink
            display='flex'
            color='white'
            _hover={{ color: "#4882f8" }}
          >
            <Text fontSize={16} mr='4'>
              Download
            </Text>
          </ChakraLink>
        </Link>
        <Link href='#testimonials' passHref>
          <ChakraLink
            display='flex'
            color='white'
            _hover={{ color: "#4882f8" }}
          >
            <Text fontSize={16} mr='4'>
              Depoimentos
            </Text>
          </ChakraLink>
        </Link>
      </HStack>
      <HStack justify='space-around' align='flex-end'>
        <Link href='https://www.instagram.com/nextimetec/' passHref>
          <ChakraLink
            display='flex'
            color='white'
            _hover={{ color: "#4882f8" }}
            target='_blank'
          >
            <Icon as={FiInstagram} w={5} h={5} />
          </ChakraLink>
        </Link>
        <Link href='https://www.facebook.com/nextimetecnologia' passHref>
          <ChakraLink
            display='flex'
            color='white'
            _hover={{ color: "#4882f8" }}
            target='_blank'
          >
            <Icon as={FiFacebook} w={5} h={5} mx='3' />
          </ChakraLink>
        </Link>
        <Link href='https://www.linkedin.com/company/nextimetec/' passHref>
          <ChakraLink
            display='flex'
            color='white'
            _hover={{ color: "#4882f8" }}
            target='_blank'
          >
            <Icon as={FiLinkedin} w={5} h={5} />
          </ChakraLink>
        </Link>
      </HStack>
    </Flex>
  );
}
