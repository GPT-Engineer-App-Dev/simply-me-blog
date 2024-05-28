import { Container, Box, Flex, VStack, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.xl" mt={8}>
        <Flex direction={{ base: "column", md: "row" }} gap={8}>
          <Box flex="3">
            <VStack spacing={8} align="start">
              <Box>
                <Heading as="h2" size="xl" mb={2}>
                  Welcome to My Blog
                </Heading>
                <Text fontSize="lg">
                  This is a personal blog about my life. Stay tuned for more updates!
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="lg" mb={2}>
                  Latest Post
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
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