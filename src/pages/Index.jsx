import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.100" p={4} mb={6} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Personal Blog</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} alignItems="flex-start">
        {/* Blog Posts Section */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>Blog Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="lg">First Blog Post</Heading>
              <Text mt={2}>This is the content of the first blog post.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="lg">Second Blog Post</Heading>
              <Text mt={2}>This is the content of the second blog post.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="gray.50" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Link href="#">First Blog Post</Link>
            <Link href="#">Second Blog Post</Link>
          </VStack>
          <Divider my={6} />
          <Heading as="h3" size="lg" mb={4}>Categories</Heading>
          <VStack spacing={4} align="stretch">
            <Link href="#">Category 1</Link>
            <Link href="#">Category 2</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.100" p={4} mt={6}>
        <Flex justifyContent="center" alignItems="center">
          <HStack spacing={4}>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaInstagram /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;