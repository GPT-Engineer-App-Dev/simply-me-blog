import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.lg" mt={8}>
        <Heading as="h1" size="xl" mb={4}>
          Contact Me
        </Heading>
        <Text fontSize="lg">
          This is the contact page where you can provide your contact details.
        </Text>
      </Container>
      <Footer />
    </Box>
  );
};

export default Contact;