import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box as="aside" w="full" p={4} bg="gray.100" borderRadius="md">
      <Heading size="md" mb={4}>
        Recent Posts
      </Heading>
      <VStack align="start" spacing={2}>
        <Text>Post 1</Text>
        <Text>Post 2</Text>
        <Text>Post 3</Text>
      </VStack>
      <Heading size="md" mt={8} mb={4}>
        Categories
      </Heading>
      <VStack align="start" spacing={2}>
        <Text>Category 1</Text>
        <Text>Category 2</Text>
        <Text>Category 3</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;