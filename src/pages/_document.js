import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br" className="">
        <Head>
          <meta name="description" content="Dashboard with Next.js" />
          <link rel="icon" href="https://rocketseat.com.br/favicon.ico" />
          <title>World Health</title>
        </Head>

        <body className="bg-gray-100 dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
