import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ImageContainer from './components/ImageContainer';

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>etne.io</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <nav className={styles.navbar}>
        <img src={"/icon.png"} className={styles.logo}/>
        <h1 className={styles.heading}>Etne.io</h1>
        </nav> 
      <main className={styles.main}>
          <ImageContainer/>
       </main>
    </div>
  )
}
