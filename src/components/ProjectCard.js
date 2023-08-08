import React from 'react';
import {
  Box, 
  Text,
  Image,
  Link,
  HStack,
  Flex,
} from '@chakra-ui/react'
import { Fade, SlideFade, useDisclosure } from '@chakra-ui/react'

const ProjectCard = (props) => {

  const { isOpen, onToggle } = useDisclosure()

  return (
    <SlideFade in offsetX='120px'>
      <Box boxShadow='3xl'>
        <Image 
          onClick={onToggle} 
          src={props.src} 
          filter='drop-shadow(0 0 0.5rem gray)'
          cursor='pointer' w='350px' h='230px' mb='.5rem' borderRadius='xl'
        />
      </Box>
      <Box w='350px'>
        <Fade in={isOpen}>
          <Flex flexDir='column' alignItems='center' gap='.75rem' justifyContent='space-between' >
            <Box borderTop='1px solid' borderColor='purple.500' w='100%'>
              <Text fontSize='lg' fontWeight='bold' pb='.5rem'>{props.name}</Text>
              <Text>{props.description}</Text>
            </Box>
            <HStack spacing={25}>
              <Link variant='primary' href={props.link} isExternal>
                <Text>Live</Text>
              </Link>
              <Link variant='primary' href={props.git}>
                <Text>Git</Text>
              </Link>
            </HStack>
          </Flex>
        </Fade>
      </Box>
    </SlideFade>
  )
}

export default ProjectCard;