import React, { useState, useEffect } from 'react'
import { loadIbuData } from './api/ibus'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NavHandler from '../components/NavHandler'
import getNotificationData from './api/notifications'
import { Button, Col, Container, Jumbotron, Row, Table } from 'react-bootstrap'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeight, faChartBar, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const Ibus = props => {
	const router = useRouter()
	const [ibuData, setIbuData] = useState(props.ibuData)
	const [notificationData, setNotificationData] = useState(props.notificationData)
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
			<NavHandler notifications={notificationData} />
			<Container className='bg-white px-0'>
				<Jumbotron
					fluid
					className='d-flex justify-content-center align-items-center text-light taster-header mx-auto my-0'>
					<p className='display-3 text-center'>IBU Chart</p>
					<p className='text-center'>(International Bitterness Units)</p>
				</Jumbotron>
				<Row className=' d-flex mx-auto'>
					<Col lg={4} xs={12} className='d-flex flex-column justify-content-between align-items-center'>
					<FontAwesomeIcon className='my-4' icon={faWeight} size="8x" />
          <p className=' text-center'>For those of you who are counting calories and are watching your waistline...</p>
          <Button size='lg' variant='primary' href='http://www.beer100.com/beercalories.htm'>Click Here</Button>
					</Col>
					<Col lg={4} xs={12} className='d-flex flex-column justify-content-between align-items-center'>
					<FontAwesomeIcon className='my-4' icon={faChartBar} size="8x" />
          <p className=' text-center'>For those who want to calculate blood alcohol content based on your weight and the number of beers you've consumed...</p>
          <Button size='lg' variant='primary' href='http://www.beer100.com/beercalories.htm'>Click Here</Button>
					</Col>
					<Col lg={4} xs={12} className='d-flex flex-column justify-content-between align-items-center'>
					<FontAwesomeIcon className='my-4' icon={faQuestionCircle} size="8x" />
          <p className='align-self-center  text-center'>Want help choosing your next beer?</p>
          <Button size='lg' variant='primary' href='http://www.beer100.com/beercalories.htm'>Click Here</Button>
					</Col>
				</Row>
				<div className='h-divider b-fluff'></div>
				<Row className='d-flex mx-auto'>
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
      <Row className='bg-warning m-0 mx-auto'>
        <Col>
          <p className='h1 text-center my-4'>
            If you don't see your beer style below let us know and We will add it.
      		</p>
        </Col>
      </Row>
			<Row className='justify-content-md-center mx-auto py-2'>
        <Col xs lg='6'>
          <Table striped bordered hover responsive className='text-center'>
            <thead>
              <tr>
                <th>Beer Style</th>
                <th>IBU's</th>
              </tr>
            </thead>
            <tbody>
              {ibuData.map(ibu => (
                <tr key={ibu.id}>
                  <td>{ibu.beerStyle}</td>
                  <td>{ibu.ibu}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
				<Footer />
			</Container>

		</>
	)
}

export const getServerSideProps = async ctx => {
	const { query } = ctx
	const ibuData = await loadIbuData(query)
	const notificationData = await getNotificationData(query)
	return {
		props: {
			ibuData,
			notificationData,
		}
	}
}

export default Ibus
