import React,{useState,useEffect} from 'react'
import { loadKegCredits } from './api/credits'
import { loadKegConsumption } from './api/consumption'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { 
	Col,
	Container,
	Jumbotron,
	Row,
	Table
} from 'react-bootstrap'

const Stats = props => {
	const router = useRouter()
	const [kegCredits, setKegCredits] = useState(props.kegCredits)
	const [kegConsumption, setKegConsumption] = useState(props.kegConsumption)

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

		<Container className='bg-white px-0'>
		<Navigation />
			<Jumbotron
				fluid
				className='d-flex justify-content-center align-items-center text-light beer-cheer w-100'
			>
				<p className='display-3 text-center'>Keg Credits Since Inception</p>
			</Jumbotron>

			<Row className='mx-auto my-4'>
				<Col className='d-flex flex-row justify-content-center align-items-center'>
					<p className='display-4 mr-2'>Rule #1</p>
					<p className='lead align-self-center mt-1'>There ARE no rules.</p>
				</Col>
			</Row>

			<Row className='d-flex align-items-center mx-auto'>
				<Col>
					<p className='h1 text-center'>How does one become a memeber?</p>
					<p className='lead text-center'>Buy a keg of hand-crafted beer.</p>
				</Col>
				<Col>
					<p className='lead'>
						Beer Club members accumlate keg credits for every keg they purchase... See below.
					</p>
					<ul>
						<li>Buy a quarter barrel (pony keg), earn 1 credit.</li>
						<li>Buy a half barrel (full keg) of beer, earn 2 credits.</li>
					</ul>
				</Col>
			</Row>
			<Row className='d-flex flex-column bg-warning text-light text-center py-4 w-100 m-0'>
			<Col className='lead'>
				A low credit number below qualifies you to buy IBC's next keg.
			</Col>
			</Row>

			<Row className='d-flex flex-column my-4'>
				<Col className='text-center'>
					<p className='display-4'>Legend:</p>
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

			<Row  className='justify-content-md-center'>
				<Col xs lg='8'>
					<Table striped bordered hover className='table-rounded text-center'>
						<thead className=''>
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
<hr></hr>
			<Row  className='justify-content-md-center'>
				<Col xs lg='6'>
					<p className='lead text-center'>Beer Consumed</p>
				</Col>
			</Row>
			<Row className='justify-content-md-center'>
				<Col xs='12' lg='8'>
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
	return {
		props: {
			kegCredits,
			kegConsumption
		},
	}
}

export default Stats
