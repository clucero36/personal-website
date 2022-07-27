import React from 'react';
import { getProjects } from '../data';
import ProjectCard from '../components/ProjectCard';

import {
  Box,
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
    <Box>
      {renderedProjects}
    </Box>
  )
}

export default Projects;