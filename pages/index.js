import Head from 'next/head'
import Header from '../components/header'
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap'

export default function Home() {
	return (
		<>
			<Head>
				<title>Island Beer Club</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			{/* Main section */}
			<Container>
				<Row>
					<Col lg={6} className='text-center p5 mt-4'>
						<div className='opening-text mt-3'>
							<p>
								We are a bunch of guys who grew up together and
								love beer. We've all gone off to school, have
								had successful careers and, in our later life,
								returned to our home town to reunite and share
								experiences. We're posting this site to
								communicate and coordinate with our numerous
								members worldwide and with potential members
								wherever they may be. This is for our amusement
								and entertainment. If you like it please return.
							</p>
							<Dropdown.Divider />
							<p>
								For Members only. Opt-in here to receive our
								periodic eGram.
							</p>
							<button type='button' className='btn btn-info'>
								Sign up for our IBC eGram
							</button>
							<div className='dropdown-divider'></div>
						</div>
					</Col>

					<Col lg={6} className='mt-4'>
						<div class='YouTube-video mt-4'>
							<p>
								We ARE the Island Beer Club - Founded in 2004
								CLICK on the picture below to begin "IBC... The
								Movie."
							</p>
							<iframe
								width='560'
								height='315'
								src='https://www.youtube.com/embed/5q_aWSWDn94'
								frameborder='0'
								allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
								allowfullscreen
							></iframe>
						</div>
					</Col>
				</Row>
			</Container>

			<section className='disclaimer mt-4'>
				<Container>
					<Row>
						<Col className='text-center mt5 mb4'>
							<h3>Remember, RULE #1: There ARE no rules.</h3>
							<p>
								How does one become a member? Buy a keg of
								hand-crafter beer.
							</p>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}
