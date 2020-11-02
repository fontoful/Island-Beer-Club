import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Navigation from '../components/navbar'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Links = () => (
	<>
		<Head>
			<title>Island Beer Club | Links</title>
		</Head>

		<Navigation />

		<Header />

		<Container className='mt-4'>
			<h1>Things we'd like to share</h1>
			<h3>If you have favorite links, please pass them on</h3>
			<hr className='my-4' style={{ width: '60%', margin: 'auto' }} />

			<Row>
				<Col lg={6}>
					<h3>These are beer related sites</h3>
					<ul>
						<li>
							<a href='http://beeradvocate.com/'>Beer Advocate</a>
						</li>
						<li>
							<a href='http://coronadobrewingcompany.com/'>
								Coronado Brewing Co in Coronado, CA
							</a>
						</li>
						<li>
							<a href='http://www.beveragefactory.com/draftbeer/couplers/american/FAQ_COMP.shtml'>
								Beer tap compatability...Find the proper
								coupler.
							</a>
						</li>
						<li>
							<a href='http://www.olddominion.com/'>
								Old Dominion Brewing Co in Ashburn, VA
							</a>
						</li>
						<li>
							<a href='http://www.karlstrauss.com/'>
								Karl Strauss Brewing Co in San Diego, CA
							</a>
						</li>
						<li>
							<a href='http://www.beer.com/'>
								Beer.com. Enjoy the virtual bartender.
							</a>
						</li>
						<li>
							<a href='http://www.lewrockwell.com/spl/buddhist-temple-beer-bottles.html'>
								Beer.com. Enjoy the virtual bartender.
							</a>
						</li>
						<li>
							<a href='http://www.lewrockwell.com/spl/buddhist-temple-beer-bottles.html'>
								Beer Bottle Temple
							</a>
						</li>
						<li>
							<a href='http://www.realbeer.com/'>RealBeer.com</a>
						</li>
						<li>
							<a href='http://www.yuengling.com/'>
								Yuengling Brewing Co. America's oldest brewery.
							</a>
						</li>
						<li>
							<a href='http://www.beerhunter.com/'>
								The Beer Hunter
							</a>
						</li>
						<li>
							<a href='http://www.allaboutbeer.com/'>
								All About Beer Online
							</a>
						</li>
						<li>
							<a href='http://www.beveragefactory.com/'>
								The Beverage Factory. Kegerator source.
							</a>
						</li>
						<li>
							<a href='http://micro.magnet.fsu.edu/beershots/index.html'>
								BeerShots
							</a>
						</li>
					</ul>
				</Col>

				<Col lg={6}>
					<h3>These are not Beer related sited</h3>
					<ul>
						<li>
							<a href='http://www.kippys.com/'>
								Kippys in Coronado, CA
							</a>
						</li>
						<li>
							<a href='http://en.wikipedia.org/wiki/Main_Page'>
								Wikipedia...Great site for general information.
							</a>
						</li>
						<li>
							<a href='http://islandbeerclub.com/foodog.htm'>
								Learn the history of Foo Dogs
							</a>
						</li>
						<li>
							<a href='http://islandbeerclub.com/science.htm'>
								IBC Science Corner. Learn the physics of life.
							</a>
						</li>
						<li>
							<a href='http://coronadolawnbowling.com//'>
								Coronado Lawn Bowling Club
							</a>
						</li>
						<li>
							<a href='http://www.x-tremegeek.com/'>
								Extreme Geek
							</a>
						</li>
						<li>
							<a href='http://www.trojanclubofsandiego.com/new_home_page.php'>
								For local Trojan fans.
							</a>
						</li>
						<li>
							<a href='For local Trojan fans.'>
								Biorhythm Calculator
							</a>
						</li>
						<li>
							<a href='http://www.bluemountain.com/'>
								Blue Mountain...E-Cards for all occasions
							</a>
						</li>
						<li>
							<a href='http://www.costcophotocenter.com/account/default.aspx?ReturnUrl=/Default.aspx'>
								Costco Photo Center...Process your pix
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
		<Footer />
	</>
)

export default Links
