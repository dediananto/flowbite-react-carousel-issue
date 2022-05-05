import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#EAB308" />
          <link
            rel="icon"
            href="https://digitalskola.com/public/assets/favicon.png"
            type="image/png"
          />
          <link rel="shortcut icon" href="/brand/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/brand/apple-icon.png"
          />
          <meta
            name="description"
            content="Aplikasi ini adalah aplikasi untuk membaca eBook untuk program pembelajaran yang diselenggarakan oleh DigitalSkola"
          />
        </Head>
        <body className="font-sans antialiased bg-gray-300 text-slate-700">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
