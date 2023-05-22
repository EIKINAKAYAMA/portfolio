import MatrixRain from "@/components/MatrixRain";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import "@/styles/style.css";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: "CustomFont, sans-serif",
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <Head>
        <title>Who is Eiki Nakayama</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Header />
      {/* <MatrixRain /> */}
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer />
    </StyledEngineProvider>
  );
}
