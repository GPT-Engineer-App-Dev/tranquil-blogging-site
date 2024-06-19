import { Container, Text, VStack, Heading, Box, Image, Link, HStack, Button, useColorMode, StackDivider } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "This is the content of the first post." },
    { id: 2, title: "Second Post", content: "This is the content of the second post." },
  ]);

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} divider={<StackDivider borderColor="gray.200" />}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Text fontSize="lg" textAlign="center">Sharing my thoughts and experiences on web development, technology, and life.</Text>
        <Box boxSize="sm">
          <Image src="/path/to/your/profile-pic.jpg" alt="Profile Picture" borderRadius="full" boxSize="150px" />
        </Box>
        <HStack spacing={4}>
          <Link href="https://twitter.com/yourprofile" isExternal>
            <FaTwitter size="30px" />
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" isExternal>
            <FaLinkedin size="30px" />
          </Link>
          <Link href="https://github.com/yourprofile" isExternal>
            <FaGithub size="30px" />
          </Link>
        </HStack>
        <Button onClick={toggleColorMode} colorScheme="teal" size="lg">
          {colorMode === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
        <Button as={RouterLink} to="/add-post" colorScheme="teal" size="lg">Add New Post</Button>
        <VStack spacing={4} width="100%">
          {posts.map(post => (
            <Box key={post.id} p={5} shadow="md" borderWidth="1px" width="100%">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
              <Button colorScheme="red" mt={4} onClick={() => deletePost(post.id)}>Delete</Button>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;