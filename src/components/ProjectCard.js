import React from 'react';

import {
  Box, 
  Flex,
  Text,
} from '@chakra-ui/react'

const ProjectCard = (props) => {


  return (
    <Box maxW='sm' >
      <Flex>
        <Text>{props.name}</Text>
        <Text>{props.description}</Text>
        <Text>{props.src}</Text> 
        <Text>{props.link}</Text>
      </Flex>
    </Box>
  )
}

export default ProjectCard;