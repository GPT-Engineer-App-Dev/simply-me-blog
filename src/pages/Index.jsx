import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.lg" mt={8}>
        <Flex direction={{ base: "column", md: "row" }} gap={8}>
          <Box flex="3">
            <Heading as="h1" size="xl" mb={4}>
              Welcome to My Blog
            </Heading>
            <VStack spacing={4} align="start">
              <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" w="full">
                <Heading size="md">Blog Post Title 1</Heading>
                <Text mt={2}>This is a summary of the blog post...</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" w="full">
                <Heading size="md">Blog Post Title 2</Heading>
                <Text mt={2}>This is a summary of the blog post...</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" w="full">
                <Heading size="md">Blog Post Title 3</Heading>
                <Text mt={2}>This is a summary of the blog post...</Text>
              </Box>
            </VStack>
          </Box>
          <Box flex="1">
            <Sidebar />
          </Box>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;