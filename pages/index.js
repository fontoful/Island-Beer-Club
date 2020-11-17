import Head from 'next/head'

import BeerClubMovie from './components/homePage/BeerClubMovie'
import BrewingProcess from './components/homePage/BrewingProcess'
import Container from 'react-bootstrap/Container'
import Footer from './components/Footer'
import FoundersDay from './components/homePage/FoundersDay'
import Founders from './components/homePage/Founders'
import Header from './components/Header'
import Intro from './components/homePage/Intro'
import KegCredits from './components/homePage/KegCredits'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <>
    <Head>
        <title>Island Beer Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <Container className='site-bg'>
      <Navigation />
      <Header />
        <Intro />
        <BeerClubMovie />
        <Founders />
        <FoundersDay />
        <KegCredits />
        <BrewingProcess />
        <Footer />
      </Container>
    </>
  )
}
