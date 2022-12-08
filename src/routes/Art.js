import React from 'react';
import {
  Box,
  Image,
  Flex,
  Text,
} from '@chakra-ui/react';


const Art = () => {

  return (
    <Box pb='1rem'>
      <Box align='center'>
        <Text fontSize='xl' fontWeight='bold'>P5.js Renders</Text>
      </Box>
      <Flex 
        wrap='wrap'
        w={['95%', '75%']}
        m='0rem auto' 
        justify='center'
        gap={6}
      >
        <Image boxSize={['sm', 'sm', 'md']} minW='' src='curvestudy.png' />
        <Image boxSize={['sm', 'sm', 'md']} minW='' src='relentless.png' />
        <Image boxSize={['sm', 'sm', 'md']} minW='' src='randsphere.png' />
        <Image boxSize={['sm', 'sm', 'md']} minW='' src='becoming.png' />
        <Image boxSize={['sm', 'sm', 'md']} minW='' src='consider.png' />
      </Flex>
    </Box>
  )
}

export default Art;