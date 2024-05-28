import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.lg" mt={8}>
        <Heading as="h1" size="xl" mb={4}>
          About Me
        </Heading>
        <Text fontSize="lg">
          This is the about page where you can write about yourself.
        </Text>
      </Container>
      <Footer />
    </Box>
  );
};

export default About;