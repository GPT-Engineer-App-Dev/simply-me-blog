import { Box, Flex, Link, Spacer, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4} py={2} color="white">
      <Flex alignItems="center">
        <HStack spacing={8} alignItems="center">
          <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
            My Blog
          </Link>
          <HStack as="nav" spacing={4}>
            <Link as={RouterLink} to="/about">
              About
            </Link>
            <Link as={RouterLink} to="/contact">
              Contact
            </Link>
          </HStack>
        </HStack>
        <Spacer />
      </Flex>
    </Box>
  );
};

export default Navbar;