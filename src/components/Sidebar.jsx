import { Box, Heading, VStack, Link } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box as="aside" w="full" p={4} bg="gray.100" borderRadius="md">
      <Heading size="md" mb={4}>
        Recent Posts
      </Heading>
      <VStack align="start" spacing={2}>
        <Link href="#">Post 1</Link>
        <Link href="#">Post 2</Link>
        <Link href="#">Post 3</Link>
      </VStack>
      <Heading size="md" mt={8} mb={4}>
        Categories
      </Heading>
      <VStack align="start" spacing={2}>
        <Link href="#">Category 1</Link>
        <Link href="#">Category 2</Link>
        <Link href="#">Category 3</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;