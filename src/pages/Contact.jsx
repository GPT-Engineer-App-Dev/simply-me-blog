import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.md" mt={8}>
        <Heading as="h1" size="xl" mb={4}>
          Contact Me
        </Heading>
        <Text fontSize="lg">
          Feel free to reach out to me through my social media channels or send me an email at contact@myblog.com.
        </Text>
      </Container>
      <Footer />
    </Box>
  );
};

export default Contact;