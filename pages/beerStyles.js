import Head from 'next/head'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const Styles = () => {
	return (
		<>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
					rel='stylesheet'
				/>
				<title>Island Beer Club | Styles</title>
				<link rel='icon' href='/beer-solid.svg' />
			</Head>
			<Navigation />
			<Container className='bg-white px-0'>
				<Jumbotron
					fluid
					className='d-flex justify-content-center align-items-center text-light beer-cheer w-100 my-0'>
					<p className='display-3'>Brewing Process and Beer Styles</p>
				</Jumbotron>

				<Row className='d-flex flex-column flex-grow-2 alert alert-secondary w-100'>
					<Col className='d-flex flex-column justify-content-center align-items-center text-dark lead'>
						<p className='blue-link'>
							Learn from the experts. Visit <a href='http://home.howstuffworks.com/beer1.htm'>How Stuff Works</a> for a illustrative presentation on the brewing process.
						</p>
						<h2>
							Want help choosing your next beer?
						</h2>
						<Button variant='xxl-primary' href='http://www.keithandthegirl.com/forums/f6/beer-flowchart-14399/'>CLICK HERE</Button>
					</Col>
				</Row>
				<Row className='d-flex align-items-center w-100'>
					<Col>
						<p className='display-4 blue-link m-4'>
							Below is a short list of beer styles available worldwide. For a broader overview and more extensive list go <a href='http://www.beerhunter.com/beerstyles.html'>The Beer Hunter</a> or to <a href='http://beeradvocate.com/beer/style'>The Beer Advocate</a>.
						</p>
						<div className='h-divider'></div>
					</Col>
				</Row>
				<Row className='d-flex align-items-center w-100'>
					<Col lg={6} xs={12} className='d-flex flex-column justify-content-center my-4'>

						<h2 className='display-4 b-fluff'>What's an Ale?</h2>
						<p className='lead indent'>
							This category of beer uses yeast that ferments at the "top" of the fermentation vessel, and typically at higher temperatures than lager yeast (60°-75°F), which, as a result, makes for a quicker fermentation period (7-8 days, or even less). Ale yeast are known to produce by-products called esters, which are "flowery" and "fruity" aromas ranging, but not limited to apple, pear, pineapple, grass, hay, plum, and prune.
						</p>
					</Col>
					<Col lg={6} xs={12}>
					<Image fluid className='shadow' src='ale-beer.jpg'></Image>
					</Col>
				</Row>

				<Row className='d-flex align-items-center flex-row-reverse w-100 my-4'>
					<Col lg={6} xs={12} className='d-flex flex-column justify-content-center my-4'>
						<h2 className='display-4 b-fluff align-self-end mr-4'>What's a Lager?</h2>
						<p className='lead indent'>
							The word lager comes from the German word lagern which means, "to store". A perfect description as lagers are brewed with bottom fermenting yeast that work slowly at around 34 degrees F, and are often further stored (up to 2 weeks or more) at cool temperature to mature. Lager yeast produce fewer by-product characters than ale yeast, which allows for other flavors to pull through, such as hops. Lagers have a soft clean taste. In general lagers are limited in diversity of style, and offered more as refreshers compared to ales.
						</p>
					</Col>
					<Col className='t-fluff' lg={6} xs={12}>
						<Image fluid className='shadow' src='lager-beer.jpg'></Image>
					</Col>
				</Row>

				<Row className='d-flex flex-column justify-content-center align-itmes-center mx-4 my-4'>
					<Col className='d-flex flex-column justify-content-center my-4'>
						<h1 className='b-fluff'>Barley Wine</h1>
						<p className='lead'>
							A very strong (alcohol) ale, usually between 8 and 12 percent by volume.
						</p>
					</Col>
					<Col className='d-flex flex-column justify-content-center my-4'>
						<h1 className='b-fluff'>Bitter</h1>
						<p className='lead'>
							A British-style ale with a high hop content, causing bitterness.
						</p>
					</Col>
					<Col className='d-flex flex-column justify-content-center my-4'>
						<h1 className='b-fluff'>Bock</h1>
						<p className='lead'>
							A strong, dark, German lager.
						</p>
					</Col>
					<Col className='d-flex flex-column justify-content-center my-4'>
						<h1 className='b-fluff'>Brown</h1>
						<p className='lead'>
							A mild, brown beer, associated with the UK.
						</p>
					</Col>
					<Col className='d-flex flex-column justify-content-center my-4'>
						<h1 className='b-fluff'>Czech Pilsner</h1>
						<p className='lead'>
							Sometimes known as the Bohemian Pilsner, is light straw to golden color and crystal clear. Hops are very prevalent usually with a spicy bitterness and or a spicy floral flavor and aroma, notably one of the defining characteristics of the Saaz hop.
						</p>
					</Col>
					<Col className='d-flex flex-column justify-content-center my-4'>
						<h1 className='b-fluff'>Doppelbock</h1>
						<p className='lead'>
							"Double Bock". An extra-strong version of Bock.
						</p>
					</Col>
					<Col className='d-flex flex-column justify-content-center my-4'>
						<h1 className='b-fluff'>Dortmunder / Export Lager</h1>
						<p className='lead'>
							Made popular in the 19th century in ortmunder, Germany, these pale golden lagers exhibit a classic clean character with notes of biscuity malts. Bitterness is akin to a German Pilsner with an aromatic aroma. Mouthfeel is firm and even, with an overall dry tone.
						</p>
					</Col>
					<Col className='d-flex flex-column justify-content-center my-4'>
						<h1 className='b-fluff'>Imperial Stout</h1>
						<p className='lead'>
							A very strong stout, typically 7-10%, originally brewed in the UK between 1780-1918 as an export to St. Petersburg. Often referred to as Russian Imperial Stout.
						</p>
					</Col>
					<Col className='d-flex flex-column justify-content-center my-4'>
						<h1 className='b-fluff'>India Pale Ale (IPA)</h1>
						<p className='lead'>
							A strong, bitter beer, originating from the UK, for export to British soldiers in India. Made strong to survive the long boat trip.
						</p>
					</Col>
					<Col className='d-flex flex-column justify-content-center my-4'>
						<h1 className='b-fluff'>Marzenbier</h1>
						<p className='lead'>
							A medium-strong malty beer usually associated with Oktoberfest and the Fall. Marzen translates as March in French, which is the month this style of beer is made.
						</p>
					</Col>
					<Col className='d-flex flex-column justify-content-center my-4'>
						<h1 className='b-fluff'>Pale Ale</h1>
						<p className='lead'>
							A fruity, milder version of an IPA.
						</p>
					</Col>
					<Col className='d-flex flex-column justify-content-center my-4'>
						<h1 className='b-fluff'>Pilsner</h1>
						<p className='lead'>
							The most imitated beer-style in the world originating from the name of a town in Czech Republic. Clear, carbonated and hoppy. Budweiser is a very compromising imitation.
						</p>
					</Col>
					<Col className='d-flex flex-column justify-content-center my-4'>
						<h1 className='b-fluff'>Porter</h1>
						<p className='lead'>
							English style first brewed in 1730. Usually very bitter and very dark.
						</p>
					</Col>
					<Col className='d-flex flex-column justify-content-center my-4'>
						<h1 className='b-fluff'>Scottish Ale</h1>
						<p className='lead'>
							Variation of an English pale ale, sweeter, less hoppy, darker malt and usually stronger.
						</p>
					</Col>
					<Col className='d-flex flex-column justify-content-center my-4'>
						<h1 className='b-fluff'>Stout</h1>
						<p className='lead'>
							Very dark and heavy, often sweetened. See Oatmeal, Imperial, Dry, Sweet, and Milk.
						</p>
					</Col>
					<Col className='d-flex flex-column justify-content-center my-4'>
						<h1 className='b-fluff'>Trappist Ale</h1>
						<p className='lead'>
							Strong, fruity ales made by Trappist monks in Belgium. Bottled with active yeast like champagne. Among the most complex, unique and probably the best beers in the world.
						</p>
					</Col>
					<Col className='d-flex flex-column justify-content-center my-4'>
						<h1 className='b-fluff'>Wheat Beer (Weisse)</h1>
						<p className='lead'>
							20-60% wheat, cloudy, refreshing, clove-like bouquet. Often garnished with a lemon.
						</p>
					</Col>
				</Row>
			</Container>

			<Footer />
		</>
	)
}

export default Styles
