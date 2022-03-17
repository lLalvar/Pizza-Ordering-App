import Head from 'next/head'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'
import PizzaList from '../components/PizzaList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Ordering App</title>
        <meta name='description' content='Pizza Ordering App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  )
}
