import Head from 'next/head'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { 
	Col,
	Container,
	Jumbotron,
	Row,
	Table
} from 'react-bootstrap'

const stats = () => {
	return (
		<>
		<Head>
		<title>IBC | History</title>
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
			<Row className='d-flex flex-column bg-warning text-light text-center py-4 w-100'>
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
				<Col className='pt-3'>
			<blockquote class="blockquote">
				<p class="lead mb-0">You are everyone's favorite member when it's your turn to buy.</p>
				<footer class="blockquote-footer">--Crash Crenshaw<cite title="Source Title"></cite></footer>
			</blockquote>
			</Col>
			</Row>

			<Row  className='w-75'>
				<Col>
					<Table className='table-rounded' responsive>
						<thead>
							<tr>
							<th>Count</th>
							<th>Member</th>
							<th>Mbr #</th>
							<th>Credits</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							<td>1</td>
							<td>Jeff Wilkens</td>
							<td>1</td>
							<td>Capital Man</td>
							</tr>
							<tr>
							<td>1</td>
							<td>Jeff Wilkens</td>
							<td>1</td>
							<td>Capital Man</td>
							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
		<Footer />
		</Container>
		</>
	)
}

export default stats
