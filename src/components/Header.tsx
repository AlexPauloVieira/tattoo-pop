import Link from "next/link";
import { Flex, HStack, Link as ChakraLink, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='12vh'
      mx='auto'
      align='center'
      justify='center'
      px='6'
      bg='gray.900'
      borderBottomColor='gray.500'
      borderBottomWidth='thin'
      position='fixed'
      zIndex={99}
    >
      <HStack align='center'>
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
    </Flex>
  );
}
