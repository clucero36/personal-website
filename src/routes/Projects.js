import React from 'react';
import { getProjects } from '../data';
import ProjectCard from '../components/ProjectCard';

import {
  Flex,
  Box,
  Text,
} from '@chakra-ui/react';
import { SlideFade } from '@chakra-ui/react'


const Projects = () => {
  
  const projects = getProjects();

  let renderedProjects = projects.map((project) => {
    return (
      <ProjectCard 
        name={project.name}
        description={project.description}
        src={project.src}
        link={project.link}
        git={project.git}
        key={project.name}
      />
    )
  })

  return (
    <Box pb='1rem'>
      <SlideFade in offsetX='120px'>
        <Box align='center'>
          <Text fontSize='3xl' fontWeight='bold' p='2rem'>Recent Projects</Text>
        </Box>
      </SlideFade>
      <Flex 
        wrap='wrap'
        justify='center'
        w='70%'
        m='0 auto' 
        gap={5}
      >
        {renderedProjects}
      </Flex>
    </Box>

  )
}

export default Projects;