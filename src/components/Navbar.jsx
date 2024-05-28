import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.800" color="white" px={4} py={2}>
      <Flex align="center" maxW="container.lg" mx="auto">
        <Text fontSize="xl" fontWeight="bold">
          My Personal Blog
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" mx={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" mx={2}>
            About
          </Link>
          <Link as={RouterLink} to="/contact" mx={2}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;