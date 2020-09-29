import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

const ibus = () => {
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

			<Header />

			<Footer />
		</>
	)
}

export default ibus
