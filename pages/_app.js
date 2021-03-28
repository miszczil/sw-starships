import '../styles/global.css'

import React from 'react';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export default function App({ Component, pageProps }) {

  const darkTheme = createMuiTheme({
      palette: {
        type: "dark",
      }
    });

    React.useEffect(() => {
       // Remove the server-side injected CSS.
       const jssStyles = document.querySelector('#jss-server-side');
       if (jssStyles) {
         jssStyles.parentElement.removeChild(jssStyles);
       }
     }, []);


  return (
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}
