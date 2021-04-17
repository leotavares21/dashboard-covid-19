import Document, { Html, Head, Main, NextScript } from 'next/document'
import favicon from '../assets/earth.png'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="description" content="Dashboard with Next.js" />
          <link rel="icon" href={favicon} />
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
