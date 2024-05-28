import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="brand.800" color="white" py={4}>
      <Flex justifyContent="center" alignItems="center">
        <Link href="https://twitter.com" isExternal mx={2}>
          <FaTwitter />
        </Link>
        <Link href="https://facebook.com" isExternal mx={2}>
          <FaFacebook />
        </Link>
        <Link href="https://instagram.com" isExternal mx={2}>
          <FaInstagram />
        </Link>
      </Flex>
      <Text textAlign="center" mt={2}>
        © {new Date().getFullYear()} My Blog. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;