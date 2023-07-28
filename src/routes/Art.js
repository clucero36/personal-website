import React from 'react';
import {
  Box,
  Image,
  Flex,
  Text,
  SlideFade,
} from '@chakra-ui/react';


const Art = () => {

  return (
    <SlideFade in offsetX='-120px'>
      <Box pb='1rem' >
        <Box align='center'>
          <Text fontSize='3xl' fontWeight='bold' p='2rem'>P5.js Renders</Text>
        </Box>
        <Flex 
          wrap='wrap'
          w={['95%', '75%']}
          m='0rem auto' 
          justify='center'
          gap={6}
        >
          <Image boxSize='350px'minW='' src='curvestudy.png' />
          <Image boxSize='350px' minW='' src='relentless.png' />
          <Image boxSize='350px' minW='' src='randsphere.png' />
          <Image boxSize='350px' minW='' src='becoming.png' />
          <Image boxSize='350px' minW='' src='consider.png' />
        </Flex>
      </Box>
    </SlideFade>
  )
}

export default Art;