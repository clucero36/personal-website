import React from 'react';
import { getProjects } from '../data';
import ProjectCard from '../components/ProjectCard';

import {
  Grid
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
    <Grid 
      templateColumns={['repeat(5, 1fr)', 'repeat(5, 1fr)', 'repeat(10, 1fr)']}  
      w={['90%', '90%', '65%', '65%', '65%']} 
      m='0 auto' 
      gap={2}
    >
      {renderedProjects}
    </Grid>
  )
}

export default Projects;