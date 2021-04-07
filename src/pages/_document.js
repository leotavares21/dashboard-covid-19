import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="description" content="Dashboard with Next.js" />
          <link rel="icon" href="https://rocketseat.com.br/favicon.ico" />
        </Head>

        <body className="bg-gray-200 dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
