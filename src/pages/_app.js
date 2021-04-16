import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import storeWrapper from '../store'
import '../styles/main.css'

const App = ({ Component, pageProps }) => {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (localStorage.theme && localStorage.theme === '1') {
      document.querySelector('html').classList.add('dark')
    } else if (localStorage.theme && localStorage.theme === '0') {
      document.querySelector('html').classList.remove('dark')
    }
    setLoad(true)
  }, [])

  return load ? (
    <>
      <Head>
        <title>World Health</title>
      </Head>
      <Component {...pageProps} />
    </>
  ) : null
}

export default storeWrapper.withRedux(App)
