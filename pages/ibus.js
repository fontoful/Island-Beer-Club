import Head from 'next/head'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeight, faChartBar, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

const Ibus = () => {
	return (
		<>
		<Head>
		<link
			href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
			rel='stylesheet'
		/>
		<title>Island Beer Club | IBU's</title>
		<link rel='icon' href='/beer-solid.svg' />
	</Head>
	<Navigation />
	<Container className='bg-white px-0'>
		<Jumbotron
			fluid
			className='d-flex justify-content-center align-items-center text-light taster-header w-100 my-0'>
			<p className='display-3 text-center'>IBU Chart</p>
			<p className='text-center'>(International Bitterness Units)</p>
		</Jumbotron>

		<Row className='d-flex w-100'>
			<Col lg={4} xs={12} className='d-flex flex-column justify-content-between align-items-center'>
				<FontAwesomeIcon className='my-4' icon={faWeight} size="9x" />
				<div className='h2 text-center'>For those of you who are counting calories and are watching your waistline...</div>
				<Button variant='xxl-primary' href='http://www.beer100.com/beercalories.htm'>Click Here</Button>
			</Col>
			<Col lg={4} xs={12} className='d-flex flex-column justify-content-between align-items-center'>
				<FontAwesomeIcon className='my-4' icon={faChartBar} size="9x" />
				<div className='h2 text-center'>For those who want to calculate blood alcohol content based on your weight and the number of beers you've consumed...</div>
				<Button variant='xxl-primary' href='http://www.beer100.com/beercalories.htm'>Click Here</Button>
			</Col>
			<Col lg={4} xs={12} className='d-flex flex-column justify-content-between align-items-center'>
				<FontAwesomeIcon className='my-4' icon={faQuestionCircle} size="9x" />
				<div className='align-self-center h2 text-center'>Want help choosing your next beer?</div>
				<Button variant='xxl-primary' href='http://www.beer100.com/beercalories.htm'>Click Here</Button>
			</Col>
		</Row>
	
	
				<div className='h-divider b-fluff'></div>
		
	
		<Row className='d-flex w-100'>
			<Col>
			<p className='indent'>
				<strong>The International Bitterness Units</strong> scale, or simply IBU scale, provides a measure of the bitterness of beer, which is provided by the hops used during brewing. An IBU is one part per million of isohumulone — the higher the number, the greater the bitterness.
			</p>
			<p className='indent'>
				A light American lager might be as low as 5 on the scale, while a barley wine can range up to 100. Measures for other beverages are below.
			</p>
			<p className='indent'>
				The bittering effect is less noticeable in beers with a high quantity of malted barley, so a higher IBU is needed in heavier beers to balance the flavor. For example, an Imperial Stout may have an IBU of 50, but will taste less bitter than an English Bitter with an IBU of 30, because the first beer uses much more malt than the second. The technical limit for IBU's is around 100, others have tried to surpass this number but there is no real gauge after 100 IBUs when it comes to taste threshold.
			</p>
			</Col>
		</Row>
		<Row className='bg-warning w-100'>
			<Col>
				<p className='h1 text-center my-4'>
					If you don't see your beer style below let us know and We will add it.
				</p>
			</Col>
		</Row>

		<Row  className='w-75 text-center'>
			<Col>
				<Table className='table-rounded table-hover' responsive>
					<thead>
						<tr>
						<th>Beer Style</th>
						<th>IBU's</th>
						</tr>
					</thead>
					<tbody>
					
					</tbody>
				</Table>
			</Col>
		</Row>

		<Footer />
		
	</Container>

		</>
	)
}

export default Ibus
