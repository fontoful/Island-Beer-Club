import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Navigation from '../components/navbar'

const Styles = () => {
	return (
		<>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
					rel='stylesheet'
				/>
				<title>Island Beer Club</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navigation />

			<Header />

			<Footer />
		</>
	)
}

export default Styles
