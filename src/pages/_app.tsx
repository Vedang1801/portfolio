import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Vedang Malusare | Portfolio</title>
        <meta name="description" content="Vedang Malusare - Computer Science professional with expertise in AI, ML, and Software Engineering" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}
