import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const AddPost = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend server
    reset();
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Add New Blog Post</Heading>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <VStack spacing={4}>
            <FormControl id="title" isRequired>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Enter the title" {...register('title')} />
            </FormControl>
            <FormControl id="content" isRequired>
              <FormLabel>Content</FormLabel>
              <Textarea placeholder="Enter the content" {...register('content')} />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">Submit</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default AddPost;