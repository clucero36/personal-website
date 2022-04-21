import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';


const Welcome = () => {


  return (
    <Box bgColor='teal.200' padding='4rem' >
      <VStack spacing='5rem'>
        <Heading>Hey, I'm Carlos</Heading>
        <Text>
          I am a web developer and I've recently graduated with a Bachelors Degree in Computer Science.
          Currently, I am learning web technologies like JavaScript, React, & Node. I have built a handful of applications
          to demonstrate my capabilites and I am looking to join a team where I can continue to develop my skills and contribute to 
          larger projects
          In my free time I enjoy going to live music events, finding new places for food & drink, playing disc golf, and spending time with my family and friends.
        </Text>
      </VStack>
    </Box>
  )
}

export default Welcome;