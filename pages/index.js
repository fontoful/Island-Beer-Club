import Head from 'next/head'
import BeerClubMovie from './homePage/BeerClubMovie'
import BrewingProcess from './homePage/BrewingProcess'
import Container from 'react-bootstrap/Container'
import Footer from './components/Footer'
import FoundersDay from './homePage/FoundersDay'
import Founders from './homePage/Founders'
import Header from './components/Header'
import Intro from './homePage/Intro'
import KegCredits from './homePage/KegCredits'
import Navigation from './components/Navigation'
import SideNav from './components/SideNav'

export default function Home(props) {
	const subtitle = "My subtitle"
	return (
		<>
			<Head>
				<title>Island Beer Club</title>
				<link rel='icon' href='/beer-solid.svg' />
			</Head>
			<Navigation />
				<Header
					title='For Members Only'
					subtitle='Opt-in here to receive our periodic eGram'
					radialGradient='rgba(10, 13, 180, 0.4), rgba(47, 143, 68, 0.4)'
					backgroundImage='/beerClubFounders1.jpg' 
					height='60vh'
				/>
			<Container fluid className='container__indexPage'>
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
