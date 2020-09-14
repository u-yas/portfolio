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
            <meta content="height=device-height width=device-width user-scalable=no"></meta>
            <style>{`
            #__next { min-height: 100% }
          `}
          </style>
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