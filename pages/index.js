import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Navigation from '../components/navbar'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

export default function Home() {
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
			

			{/* Main section */}
			<Container>
				<Row className='mb-5'>
					<Col lg={6} className='text-center p5 my-4'>
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
						</div>
					</Col>

					<Col lg={6} className='mt-4'>
						<div className='YouTube-video mt-4'>
							<p>
								We ARE the Island Beer Club - Founded in 2004
								CLICK on the picture below to begin "IBC... The
								Movie."
							</p>
							{/* <iframe
								width='560'
								height='315'
								src='https://www.youtube.com/embed/5q_aWSWDn94'
								frameborder='0'
								allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
								allowfullscreen
							></iframe> */}
							<ResponsiveEmbed aspectRatio='16by9'>
								<embed
									src='https://www.youtube.com/embed/5q_aWSWDn94'
									// type='video'
								/>
							</ResponsiveEmbed>
						</div>
					</Col>
				</Row>
			</Container>

			<section className='disclaimer mt-4'>
				<Container>
					<Row className='mb-4'>
						<Col className='text-center mt5 mb4'>
							<h3>Remember, RULE #1: There ARE no rules.</h3>
							<p>
								How does one become a member? Buy a keg of
								hand-crafter beer.
							</p>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col>
							<strong>
								<p>
									Please take a tour. We will be adding more
									areas as we grow.
								</p>
							</strong>
							<ul>
								<li>
									<a href='https://www.kegworks.com/blog/guide-to-beer-keg-sizes/'>
										How many pints in a half barrell?
									</a>
								</li>
								<li>
									<a href=''>
										Want help choosing your next Beer?
									</a>
								</li>
								<li>
									<a href=''>
										We care about your safety. Check out our
										Notification page
									</a>
								</li>
								<li>
									<a href='#'>
										Proud to be an American? Pass this link
										around
									</a>
								</li>
								<li>
									<a href=''>
										Meet our members. Watch our growth
									</a>
								</li>
								<li>
									<a href=''>
										Know anything about Coronado and Some
										Like It Hot?
									</a>
								</li>
								<li>
									<a href=''>
										The Poem Stranger has blessed us with a
										poem.
									</a>
								</li>
								<li>
									<a href=''>
										Know anything about beer styles?
									</a>
								</li>
								<li>
									<a href=''>
										How much does beer cost world-wide?
									</a>
								</li>
								<li>
									<a href=''>How bitter is your beer?</a>
								</li>
								<li>
									<a href=''>IBC Science Corner.</a>
								</li>
								<li>
									<a href=''>Check your biorythmns.</a>
								</li>
								<li>
									<a href=''>
										How long has it been since you've played
										Hangman?
									</a>
								</li>
								<li>
									<a href=''>
										What's the oldest brewery in the U. S.?
									</a>
								</li>
								<li>
									<a href=''>
										How much beer has the IBC consumed?
									</a>
								</li>
								<li>
									<a href=''>
										Do you know anything about Foo Dogs?
									</a>
								</li>
								<li>
									<a href=''>
										How much do you know about brewing?
									</a>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</section>

			<hr className='my-4' style={{ width: '60%', margin: 'auto' }} />

			<section className='phrases'>
				<Container>
					<Row>
						<Col>
							<h3>Best Club on this side of the drink!</h3>
							<small>Ken May, 30 Oct 09</small>
						</Col>
					</Row>
					<Row>
						<Col className='mb-4'>
							<p>
								Regular consumption of beer eliminates the
								weaker brain cells, making the brain a faster
								and more efficient machine. That's why you
								always feel smarter after a few beers.
							</p>
							<small>
								-- Cliff Clavin (Submitted by Richard Smith, 24
								Mar 10)
							</small>
						</Col>
					</Row>

					<hr className='mt-3 mb-3' />
					<Row className='mb-3'>
						<Col>
							<strong>ALWAYS PLAN AHEAD!</strong> -- Buy two cases
							of beer
						</Col>
					</Row>
					<Row>
						<Col sm={6}>
							<p>
								Beer is proof that God loves us and wants us to
								be happy. Benjamin Franklin
							</p>
						</Col>
						<Col sm={6}>
							<p>
								Beer is not just a breakfast beverage. It is a
								way of life. COL Jack Holly, USMC
							</p>
						</Col>
						<Col sm={6}>
							<p>
								Finish your beer. There are sober folks in
								China. Unknown
							</p>
						</Col>
						<Col sm={6}>
							<p>
								Life's tough... it's even tougher if you're
								stupid. John Wayne
							</p>
						</Col>
						<Col sm={6}>
							<p>
								I read about the evils of drinking, I gave up
								reading. Henny Youngman
							</p>
						</Col>
						<Col sm={6}>
							<p>
								Everybody's got to believe in something. I
								believe I'll have another beer. W. C. Fields
							</p>
						</Col>
						<Col sm={6}>
							<p>
								Alcohol - the cause of and the solution to - all
								of life's problems. Homer Simpson
							</p>
						</Col>
						<Col sm={6}>
							<p>
								Beer: Helping ugly people have sex since 1862.
								Anonymous
							</p>
						</Col>
					</Row>
				</Container>
			</section>

			<Footer />
		</>
	)
}
