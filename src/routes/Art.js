import React from 'react';
import {
  Box,
  Image,
  Flex,
  Text,
} from '@chakra-ui/react';


const Art = () => {

  return (
    <Box pb='1rem' >
      <Box align='center'>
        <Text fontSize='xl' fontWeight='bold'>P5.js Renders</Text>
      </Box>
      <Flex 
        wrap='wrap'
        w='60%'
        m='1rem auto' 
        justify='center'
        gap={6}
      >
        <Image boxSize='md' minW='445px' src='becoming.png' />
        <Image boxSize='md' minW='445px' src='consider.png' />
        <Image boxSize='md' minW='445px' src='randsphere.png' />
        <Image boxSize='md' minW='445px' src='rgbrays3.png' />
      </Flex>
    </Box>
  )
}

export default Art;