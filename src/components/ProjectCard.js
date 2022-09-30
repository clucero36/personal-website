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
    <Box w='sm' h='25rem' minW='350px' boxShadow='2xl' borderRadius='md'>
      <Flex flexDir='column' alignItems='center' gap='.75rem' justifyContent='space-between' h='100%'>
        <Image src={props.src} w='95%' h='15rem' pt='1rem'/>
        <Box w='95%' borderTop='1px solid' borderColor='purple.800'>
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