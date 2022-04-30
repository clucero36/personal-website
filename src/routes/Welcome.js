import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Icon,
  Link
} from '@chakra-ui/react';
import { DiGithubBadge } from "react-icons/di";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Welcome = () => {

  return (
    <Box padding='4rem' >
      <VStack spacing='5rem'>
        <Heading>Hey, I'm Luis</Heading>
        <Box w='20rem'>
          <VStack spacing={5}>
            <Text>
              I am a web developer and I've recently graduated with a Bachelors Degree in Computer Science.
              Currently, I am learning web technologies like JavaScript, React, & Node. I have built a handful of applications
              to demonstrate my capabilites and I am looking to join a team where I can continue to develop my skills and contribute to 
              larger projects.
            </Text>
            <Text>
              In my free time I enjoy going to live music events, finding new places for food & drink, playing disc golf, and spending time with my family and friends.
            </Text>
          </VStack>
        </Box>
        <Box>
          <Link href='https://github.com/clucero36' variant='primary'>
            <Icon h={6} w={6} as={DiGithubBadge} />
          </Link>
          <Link href='https://linkedin.com/in/luisclucero' variant='primary'>
            <Icon h={6} w={6} as={TiSocialLinkedinCircular} />
          </Link>
        </Box>
      </VStack>
    </Box>
  )
}

export default Welcome;