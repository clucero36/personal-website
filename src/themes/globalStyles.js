
export const GlobalStyles = {
  global: (props) => ({
    body: {
      fontFamily: "Roboto",
      color: props.colorMode === 'dark' ?  'gray.600' : 'white',
      backgroundColor: props.colorMode === 'dark' ? 'blue.300' : 'gray.800', 
      margin: '0 auto',
    }
  }),
}