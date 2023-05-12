import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Icon,
  Link,
} from '@chakra-ui/react';
import { DiGithubBadge } from "react-icons/di";
import { TiSocialLinkedinCircular } from "react-icons/ti";

function App() {
  return (
    <Box padding={['2rem','4rem']}>
      <VStack spacing='5rem'>
        <Heading>Hey, I'm Luis</Heading>
        <Box w={['15rem', '25rem']}>
          <VStack spacing={5}>
            <Text>
              I am a web developer, recent college graduate, and an intern at Trinet Internet Solutions in Irvine, California. 
              I have built applications with JavaScript tech stacks and I'm currently building web applications with content managements systems.
              I'm always looking for ways to improve as a developer and I hope to one day leverage my skill set to start a business of my own. 
            </Text>
            <Text>
              In my free time I enjoy going to live music events, finding new places for food & drink, playing disc golf, and spending time with my family and friends.
            </Text>
          </VStack>
        </Box>
        <Box m='0 auto'>
          <Link href='https://github.com/clucero36' variant='primary'>
            <Icon h={8} w={8} as={DiGithubBadge} />
          </Link>
          <Link href='https://linkedin.com/in/luisclucero' variant='primary'>
            <Icon h={8} w={8} as={TiSocialLinkedinCircular} />
          </Link>
        </Box>
      </VStack>
    </Box>
  )
};

export default App;
