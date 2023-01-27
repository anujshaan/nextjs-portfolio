import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import {AnimatePresence} from 'framer-motion'


function MyApp({ Component, pageProps,router }: AppProps) {
  return <div className='overflow-hidden bg-[#FD8A8A] w-full relative h-screen'>
        <Head>
            <title>Anuj Shaan</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <Navbar/>
      <AnimatePresence initial={true}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
  </div>
}

export default MyApp
