
const projects = [
  {
    name: 'Jet Boat Classifieds',
    description: 'E-Commerce application developed with react, firebase, & stripe payment processing',
    src: 'shopScreen.png',
    link: 'https://jetboats.netlify.app/',
    git: 'https://github.com/clucero36/jetboats.git',
  },
  {
    name: 'Blogger Landing Page',
    description: 'Landing page developed with HTML, CSS, & JavsScript',
    src: 'bloggrNew.png',
    link: 'https://blogrbusiness.netlify.app/',
    git: 'https://github.com/clucero36/Blogr.git',
  },
  {
    name: 'Widgets',
    description: 'Widgets application developed with JS, React, & Chakra UI component library',
    src: 'widgetsNew.png',
    link: 'https://five-widgets.netlify.app/',
    git: 'https://github.com/clucero36/widgets.git'
  },
  { 
    name: 'Spotify Clone',
    description: 'Spotify UI made with React JS & Spotify OAuth 2.0. Work in Progress. Email me for live access',
    src: 'spot1stPage.png',
    link: '',
    git: 'https://github.com/clucero36/spotify-clone.git',
  }
]

export function getProjects() {
  return projects;
}