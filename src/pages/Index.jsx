import { Container, Text, VStack, Heading, Box, Image, Link, HStack, Button } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
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
        <Button as={RouterLink} to="/add-post" colorScheme="teal" size="lg">Add New Post</Button>
      </VStack>
    </Container>
  );
};

export default Index;