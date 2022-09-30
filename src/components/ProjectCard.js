import React from 'react';

import {
  Box, 
  Text,
  Image,
  Heading,
  Link,
  HStack,
  Flex,
  GridItem,
} from '@chakra-ui/react'


const ProjectCard = (props) => {


  return (
    <Box w='sm' h='25rem' boxShadow='2xl' borderRadius='md' minW='350px'>
      <Flex flexDir='column' alignItems='center' gap='.75rem' justifyContent='space-between' h='100%'>
        <Image src={props.src} pt='1rem' w='22rem' h='15rem'/>
        <Box w='22rem' borderTop='1px solid' borderColor='purple.800'>
          <Heading size='md' pb='.5rem'>{props.name}</Heading>
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