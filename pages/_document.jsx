import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/Logo.png" type="image/png" />
        <link rel="manifest" href="manifest.json" />
      </Head>
      <body style={{"margin": 0}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
