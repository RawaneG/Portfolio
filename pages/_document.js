import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const locale = this.props.__NEXT_DATA__?.locale || "en";
    return (
      <Html lang={locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="root" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
