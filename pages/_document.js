import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta content=" width=device-width user-scalable=no"></meta>
        </Head>
        <body>
          <div>
              <Main />
              <NextScript /> 
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument