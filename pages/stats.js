import React, { useState, useEffect } from 'react'
import { loadKegCredits } from './api/credits'
import { loadKegConsumption } from './api/consumption'
import Head from 'next/head'
import NavHandler from '../components/NavHandler'
import getNotificationData from './api/notifications'
import Footer from '../components/Footer'
import {
	Col,
	Container,
	Jumbotron,
	Row,
	Table
} from 'react-bootstrap'

const Stats = props => {
	const [kegCredits, setKegCredits] = useState(props.kegCredits)
	const [kegConsumption, setKegConsumption] = useState(props.kegConsumption)
	const [notificationData, setNotificationData] = useState(props.notificationData)

	//Trying to Sum up the total number of gallons consumed??
	let sumGallons = kegConsumption.map(g => g.gallons)
	let reducer = (accumulator, currentValue) => accumulator + currentValue
	//console.log(sumGallons.reduce(reducer))
	return (
		<>
			<Head>
				<title>IBC | Keg Credits</title>
				<link rel='icon' href='/beer-solid.svg' />
			</Head>
			<NavHandler notifications={notificationData} />
			<Container className='bg-white px-0'>
				<Jumbotron fluid className='d-flex justify-content-center align-items-center text-light beer-2-header my-0'>
					<p className='h2 text-center'>Keg Credits Since Inception</p>
				</Jumbotron>
				<Row className='mx-auto'>
					<Col className='d-flex flex-column justify-content-center align-items-center'>
						<p className='h2 mb-0'>Rule #1</p>
						<p className='align-self-center mt-1'>There ARE no rules.</p>
					</Col>
				</Row>
				<Row className='d-flex flex-column align-items-center mx-auto'>
					<Col>
					<p className='h2 text-center'>How does one become a memeber?</p>
          <p className='text-center'>Buy a keg of hand-crafted beer.</p>
					</Col>
					<Col className='text-center'>
          <p className='h5'>
            Beer Club members accumlate keg credits for every keg they purchase... See below.
          </p>
        </Col>
				<Col className='d-flex flex-column justify-content-center align-items-center'>
					<ul>
            <li>Buy a quarter barrel (pony keg), earn 1 credit.</li>
            <li>Buy a half barrel (full keg) of beer, earn 2 credits.</li>
          </ul>
					</Col>
				</Row>
				<Row className='d-flex flex-column bg-warning text-light text-center py-4 mx-auto'>
					<Col className='lead'>
						A low credit number below qualifies you to buy IBC's next keg.
					</Col>
				</Row>
				<Row className='d-flex flex-column mx-auto'>
					<Col className='text-center'>
						<p className='h2'>Legend:</p>
					</Col>
					<Col className='d-flex flex-row justify-content-center align-items-baseline lead'>
						<strong className='mr-1'>CIK =</strong>
						<p>Credits-In-Kind</p>
					</Col>
					<Col className='pt-3 text-center'>
						<blockquote className="blockquote">
							<p className="lead mb-0">You are everyone's favorite member when it's your turn to buy.</p>
							<footer className="blockquote-footer">--Crash Crenshaw<cite title="Source Title"></cite></footer>
						</blockquote>
					</Col>
				</Row>
				<Row className='justify-content-center mx-auto'>
					<Col xs lg='8' className='px-0 px-md-5'>
						<Table striped bordered hover responsive className='table-rounded text-center'>
							<thead>
								<tr>
									<th className='align-middle'>Count</th>
									<th className='align-middle'>Member</th>
									<th className='align-middle'>Mbr #</th>
									<th className='align-middle'>Credits</th>
								</tr>
							</thead>
							<tbody>
								{kegCredits.map(kegCredit => (
									<tr className='' key={kegCredit.pk}>
										<td className='align-middle'>{kegCredit.pk}</td>
										<td className='align-middle'>{kegCredit.name}</td>
										<td className='align-middle'>{kegCredit.mbrNumber}</td>
										<td className='align-middle'>{kegCredit.kic}</td>
									</tr>
								))}
							</tbody>
						</Table>
					</Col>
				</Row>
				<Row className='mx-auto'>
					<Col>
						<p className='lead text-center'>Beer Consumed</p>
					</Col>
				</Row>
				<Row className='justify-content-md-center mx-auto'>
					<Col xs='12' lg='8' className='px-0 px-md-5'>
						<Table striped bordered hover responsive size="sm" className='table-rounded text-center'>
							<thead>
								<tr>
									<th>Kegs</th>
									<th>Purchased</th>
									<th>Delivered</th>
									<th>Finished</th>
									<th>Beer Name</th>
									<th>Gallons</th>
								</tr>
							</thead>
							<tbody>
								{kegConsumption.map(consumed => (
									<tr key={consumed.kegs}>
										<td className='align-middle'>{consumed.kegs}</td>
										<td className='align-middle'>{consumed.purchased}</td>
										<td className='align-middle'>{consumed.delivered}</td>
										<td className='align-middle'>{consumed.finished}</td>
										<td className='align-middle'>{consumed.beerName}</td>
										<td className='align-middle'>{consumed.gallons}</td>
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
	const kegCredits = await loadKegCredits(query)
	const kegConsumption = await loadKegConsumption(query)
	const notificationData = await getNotificationData(query)
	return {
		props: {
			kegCredits,
			kegConsumption,
			notificationData,
		},
	}
}

export default Stats
