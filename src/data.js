
const projects = [
  {
      name: 'Blogger Landing Page',
      description: 'Landing page developed with HTML, CSS, & JavsScript',
      src: 'desktop-design.jpg',
      link: 'https://blogrbusiness.netlify.app/'
  },
  {
      name: 'Tic-Tac-Toe',
      description: 'Game developed with JS, React, & Chakra UI component library',
      src: 'ttt.png',
      link: 'https://threeinarow.netlify.app/'
  },
  {
      name: 'Five Widgets',
      description: 'Widgets application developed with JS, React, & Chakra UI component library',
      src: 'widgets.png',
      link: 'https://five-widgets.netlify.app/'
  }
]

export function getProjects() {
  return projects;
}