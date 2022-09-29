import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Heading from './components/Heading';
import Articles from './routes/Articles';
import Projects from './routes/Projects';


import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import { overrides } from './themes/themeIndex';

ReactDOM.render(
  <>
    <ChakraProvider theme={overrides}>
      <ColorModeScript />
      <BrowserRouter>
      <Heading />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='articles' element={<Articles />} />
          <Route path='projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </>,
  document.getElementById('root')
);

