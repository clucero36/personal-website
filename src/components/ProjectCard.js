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
    <GridItem colSpan={5} w='sm' h='25rem' m='0rem auto' boxShadow='2xl' borderRadius='md'>
      <Flex flexDir='column' alignItems='center' gap='1rem'>
        <Image src={props.src} pt='1rem' w='22rem' h='15rem'/>
        <Box w='90%' m='.5rem auto' borderTop='1px solid' borderColor='purple.800' h='5rem'>
          <Heading size='md'>{props.name}</Heading>
          <Text>{props.description}</Text>
        </Box>
        <HStack spacing={25} pb='1rem'>
          <Link variant='primary' href={props.link}>
            <Text>Live</Text>
          </Link>
          <Link variant='primary' href={props.git}>
            <Text>Git</Text>
          </Link>
        </HStack>
      </Flex>
    </GridItem>
  )
}

export default ProjectCard;