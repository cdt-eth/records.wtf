/* eslint-disable @next/next/no-css-tags */
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />

          <link
            href='//db.onlinewebfonts.com/c/a6303fd87015a70ec40ce68391f5f344?family=ITC+Clearface'
            rel='stylesheet'
            type='text/css'
          />
          <link
            href='//db.onlinewebfonts.com/c/6b051836cfd27b68866998b31f3c8813?family=ITC+Clearface'
            rel='stylesheet'
            type='text/css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
