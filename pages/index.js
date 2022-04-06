import Head from 'next/head'
import ChairCollection from '../components/chairCollection/ChairCollection'
import CollectionAllList from '../components/collectionList/CollectionAllList'
import HeroSlider from '../components/heroSlider/HeroSlider'
import TrendingProductAll from '../components/trendingProduct/TrendingProductAll'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div id='body'>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.heroComponents}>
      <HeroSlider/>
      </section>
      <CollectionAllList/>
      <ChairCollection/>
      <TrendingProductAll/>
    </div>
  )
}