import React from 'react';
import { getProjects } from '../data';
import ProjectCard from '../components/ProjectCard';

import {
  Flex,
} from '@chakra-ui/react';


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
    <Flex 
      wrap='wrap'
      justify='space-around'
      w='50%'
      m='0 auto' 
      gap={5}
    >
      {renderedProjects}
    </Flex>
  )
}

export default Projects;