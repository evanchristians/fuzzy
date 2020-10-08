import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import { Theme } from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
