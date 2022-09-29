import React from 'react';

import {
  Box, 
  Text,
  Image,
  Heading,
  Link,
  HStack,
  Flex,
} from '@chakra-ui/react'


const ProjectCard = (props) => {


  return (
    <Box w='sm' m='5rem auto' boxShadow='2xl' borderRadius='md'>
      <Flex flexDir='column' alignItems='center' gap='1rem'>
        <Image src={props.src} pt='1rem' w='20rem' maxH='20rem'/>
        <Box w='90%' m='0 auto' borderTop='1px solid' borderColor='purple.800'>
          <Heading size='md'>{props.name}</Heading>
          <Text>{props.description}</Text>
        </Box>
        <HStack spacing={25}>
          <Link variant='primary' href={props.link}>
            <Text>Live</Text>
          </Link>
          <Link variant='primary' href={props.git}>
            <Text>Git</Text>
          </Link>
        </HStack>
      </Flex>
    </Box>
  )
}

export default ProjectCard;