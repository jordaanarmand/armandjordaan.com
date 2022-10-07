import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html lang="en">
      <Head>
        <title>Armand Jordaan | Full Stack DOTNET Software Developer</title>
        <meta
          property="og:title"
          content="Armand Jordaan | Full Stack DOTNET Software Developer"
          key="title"
        />
        <meta
          name="description"
          content="A dynamic and creative full-stack Dotnet software developer with over 9 years of experience in producing robust code for high-volume companies in various industries"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#FDF500" />
        <meta name="theme-color" content="#FDF500" />
        <meta name="robots" content="index, follow, archive" />
      </Head>
      <body>
        <Component {...pageProps} />
      </body>
    </html>
  );
}

export default MyApp;
