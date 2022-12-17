
const projects = [
  {
    name: 'Jet Boat Classifieds',
    description: 'E-Commerce business application. React, Firebase, & Stripe payment processing.',
    src: 'shopScreen.png',
    link: 'https://jetboats.netlify.app/',
    git: 'https://github.com/clucero36/jetboats.git',
  },
  { 
    name: 'Spotify Clone',
    description: 'Spotify Web Playback App. React, Spotify OAuth 2.0, & Firebase. Email me for live access.',
    src: 'spot1stPage.png',
    link: '',
    git: 'https://github.com/clucero36/spotify-clone.git',
  },
  {
    name: 'Blogger Landing Page',
    description: 'Business landing page. HTML, CSS, & JavsScript.',
    src: 'bloggrNew.png',
    link: 'https://blogrbusiness.netlify.app/',
    git: 'https://github.com/clucero36/Blogr.git',
  },
  {
    name: 'Tic-Tac-Toe',
    description: 'Classic Tic-Tac-Toe. JavaScript, React, & Chakra UI',
    src: 'tttNew.png',
    link: 'https://threepeat.netlify.app/',
    git: 'https://github.com/clucero36/TicTacToe.git'
  },
  {
    name: 'Salon WebApp',
    description: 'Business Web App. Bookings Coming Soon. Next.js, Node/Express, ChakraUI.',
    src: 'salon-webapp.PNG',
    link: 'https://salon-webapp.vercel.app',
    git: 'https://github.com/clucero36/salon-webapp.git'
  }
]

export function getProjects() {
  return projects;
}