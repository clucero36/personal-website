import React from 'react';

import {
  Box, 
  Text,
  Image,
  Heading,
  AspectRatio, 
  Link,
  HStack,
} from '@chakra-ui/react'


const ProjectCard = (props) => {


  return (
    <Box maxW='sm' minW='sm' display='flex' flexDir='column' alignItems='center' m='5rem auto' boxShadow='2xl' borderRadius='md'>
      <AspectRatio maxW='20rem' minW='20rem' ratio={4/3} >
        <Image src={props.src} boxShadow='2xl' pt='1rem'/>
      </AspectRatio>
      <Box m='2rem' borderTop='1px solid' borderColor='purple.800'>
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
    </Box>
  )
}

export default ProjectCard;