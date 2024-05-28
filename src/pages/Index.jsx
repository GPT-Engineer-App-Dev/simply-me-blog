import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="white" p={4} mb={8} boxShadow="md" justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg" color="teal.500">My Personal Blog</Heading>
        <HStack spacing={6}>
          <Link href="/" fontWeight="bold" color="gray.600" _hover={{ color: "teal.500" }}>Home</Link>
          <Link href="/about" fontWeight="bold" color="gray.600" _hover={{ color: "teal.500" }}>About</Link>
          <Link href="/contact" fontWeight="bold" color="gray.600" _hover={{ color: "teal.500" }}>Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} align="start" spacing={8}>
        {/* Blog Posts Section */}
        <Box flex="3" p={4} bg="white" boxShadow="md" borderRadius="md">
          <Heading as="h2" size="xl" mb={6} color="teal.500">Blog Posts</Heading>
          <VStack spacing={8} align="start">
            <Box p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="lg" mb={2} color="teal.600">First Blog Post</Heading>
              <Text mt={2} color="gray.700">This is the content of the first blog post.</Text>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="lg" mb={2} color="teal.600">Second Blog Post</Heading>
              <Text mt={2} color="gray.700">This is the content of the second blog post.</Text>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="white" boxShadow="md" borderRadius="md" ml={{ md: 4 }} mt={{ base: 8, md: 0 }}>
          <Heading as="h3" size="lg" mb={4} color="teal.500">Recent Posts</Heading>
          <VStack spacing={4} align="start">
            <Link href="#" color="gray.600" _hover={{ color: "teal.500" }}>First Blog Post</Link>
            <Link href="#" color="gray.600" _hover={{ color: "teal.500" }}>Second Blog Post</Link>
          </VStack>
          <Divider my={8} />
          <Heading as="h3" size="lg" mb={4} color="teal.500">Categories</Heading>
          <VStack spacing={4} align="start">
            <Link href="#" color="gray.600" _hover={{ color: "teal.500" }}>Category 1</Link>
            <Link href="#" color="gray.600" _hover={{ color: "teal.500" }}>Category 2</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="white" p={4} mt={8} boxShadow="md">
        <HStack spacing={6} justify="center">
          <Link href="https://twitter.com" isExternal color="gray.600" _hover={{ color: "teal.500" }}><FaTwitter /></Link>
          <Link href="https://facebook.com" isExternal color="gray.600" _hover={{ color: "teal.500" }}><FaFacebook /></Link>
          <Link href="https://instagram.com" isExternal color="gray.600" _hover={{ color: "teal.500" }}><FaInstagram /></Link>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;