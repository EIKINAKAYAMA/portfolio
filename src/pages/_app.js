import "@/styles/style.css";
import Head from "next/head";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider, CssBaseline } from "@mui/material";

export default function App({ Component, pageProps }) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <Head>
        <title>Who is Eiki Nakayama</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Header />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer />
    </>
  );
}
