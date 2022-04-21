import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';


ReactDOM.render(
  <>
    <ColorModeScript />

    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </>,
  document.getElementById('root')
);

