import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Navigation from '../components/navbar'

const BannerTravel = () => {
	return (
		<>
			<Head>
				<title>Island Beer Club |Banner Travel</title>
			</Head>
			<Navigation />
			<Header />
			<Footer />
		</>
	)
}

export default BannerTravel
