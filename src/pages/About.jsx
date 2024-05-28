import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.md" mt={8}>
        <Heading as="h1" size="xl" mb={4}>
          About Me
        </Heading>
        <Text fontSize="lg">
          Hello! I'm a blogger sharing my life experiences and thoughts. Follow my journey as I explore new adventures and share my stories.
        </Text>
      </Container>
      <Footer />
    </Box>
  );
};

export default About;