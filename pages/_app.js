import '../styles/global.css'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export default function App({ Component, pageProps }) {

  const darkTheme = createMuiTheme({
      palette: {
        type: "dark",
      }
    });

  return (
      <ThemeProvider theme={darkTheme}>  
        <Component {...pageProps} />
      </ThemeProvider>
  )
}
