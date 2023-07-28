
export const GlobalStyles = {
  global: (props) => ({
    body: {
      fontFamily: "Roboto",
      color: props.colorMode === 'dark' ?  'white' : 'white',
      backgroundColor: props.colorMode === 'dark' ? 'gray.700' : 'gray.800', 
      margin: '0 auto',
    }
  }),
}