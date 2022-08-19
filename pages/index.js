import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aryan Rajoria</title>
        <meta name="description" content="Aryan Rajoria's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}
