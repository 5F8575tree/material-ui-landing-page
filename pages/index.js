import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme"; // Import your custom theme
import Header from "../components/Header/Header";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ThemeProvider theme={theme}>
          <Header />
          <Hero />
        </ThemeProvider>
      </main>
    </>
  );
}
