import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import getNotificationData from './api/notifications'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavHandler from '../components/NavHandler'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBeer, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import {
	Container,
	Row,
	ResponsiveEmbed,
	Image,
	Button,
	Col, Card, CardGroup,
} from 'react-bootstrap'

const Home = ({notificationData}) => {

	return (
		<>
			<Head>
				<title>Island Beer Club</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
				<link rel='icon' href='/beer-solid.svg' />
			</Head>
			<NavHandler notifications={notificationData} />
			<Container className='bg-light'>
			<Header
				title='For Members Only'
				subtitle='Opt-in here to receive our periodic eGram'
				radialGradient='rgba(10, 13, 180, 0.4), rgba(47, 143, 68, 0.4)'
				backgroundImage='/beerClubFounders1.jpg'
			/>
				<Row className='py-3 mt-n4 my-rounded-top bg-warning top-shadow'>
					<Col className='mt-4'>
						<h2 className='text-center'>Remember, RULE #1: There ARE no rules</h2>
						<p className='text-center'><strong>How does one become a member?</strong>{' '}Buy a keg of hand-crafted beer.</p>
					</Col>
				</Row>
				<Row className='mt-2'>
					<Col lg={6} xs={12} className='d-flex flex-column align-items-center'>
						<FontAwesomeIcon icon={faBeer} height='150px' />
						<p> We are a bunch of guys who grew up together and love beer. We've all gone off to school, have had successful careers and, in our later life, returned to our home town to reunite and share experiences. We're posting this site to communicate and coordinate with our numerous members worldwide and with potential members wherever they may be. This is for our amusement and entertainment. If you like it please return.</p>
					</Col>
					<Col lg={6} xs={12} className='d-flex flex-column align-items-center'>
						<FontAwesomeIcon icon={faUserFriends} height='150px'/>
						<p>The IBC is a focal point of merriment and community outreach. The IBC meets every Wednesday from 4 PM to 6 PM (Standard Time); 4:30 PM to 6:30 PM (Daylight Savings Time) in the alley (Beer Belly Blvd) on J Avenue in Coronado. Guests, especially ladies, are always welcome when accompanied by a Beer Club member. Please join us.</p>
					</Col>
				</Row>

				<Row className="d-flex flex-column bg-dark text-light py-2">
					<Col className='d-flex justify-content-center'>
						<h1 className='display-4'>The Movie</h1>
					</Col>
					<Col className="d-flex justify-content-center text-center">
						<p className='lead'>We are the Island Beer Club</p>
					</Col>
					<Col className='d-flex justify-content-center'>
						<ResponsiveEmbed style={{maxWidth: '768px'}} aspectRatio='16by9'>
							<embed
								src='https://www.youtube.com/embed/5q_aWSWDn94'
							/>
						</ResponsiveEmbed>
					</Col>
				</Row>

				<Row className="justify-content-center text-center px-3">
					<Col>
						<h1 className='display-4'>Founders</h1>
						<p>We’re proud of our products, and we’re really excited when we get feedback from our users.</p>
					</Col>
				</Row>
				<Row className='py-4'>
					<Col className='d-flex justify-content-center align-items-center text-center flex-wrap'>
						<Card className='founders-imgs shadow'>
							<Card.Img src='/founders/JeffWilkens.jpg' />
							<Card.Body>
								<Card.Subtitle>Jeff Wilkens</Card.Subtitle>
								<Card.Text>Mbr: #1</Card.Text>
							</Card.Body>
						</Card>
						<Card className='founders-imgs shadow'>
							<Card.Img src='/founders/Morton.jpg' />
							<Card.Body>
								<Card.Subtitle>John Morton</Card.Subtitle>
								<Card.Text>Mbr: #2</Card.Text>
							</Card.Body>
						</Card>
						<Card className='founders-imgs shadow'>
							<Card.Img src='/founders/Muncey.jpg' />
							<Card.Body>
								<Card.Subtitle>John Muncy</Card.Subtitle>
								<Card.Text>Mbr: #3</Card.Text>
							</Card.Body>
						</Card>
						<Card className='founders-imgs shadow'>
							<Card.Img src='/founders/Oly.jpg' />
							<Card.Body>
								<Card.Subtitle>Wayne Oldendorph</Card.Subtitle>
								<Card.Text>Mbr: #4</Card.Text>
							</Card.Body>
						</Card>
						<Card className='founders-imgs shadow'>
							<Card.Img src='/founders/Rob.jpg' />
							<Card.Body>
								<Card.Subtitle>Rob Crenshaw</Card.Subtitle>
								<Card.Text>Mbr: #5</Card.Text>
							</Card.Body>
						</Card>

					</Col>
				</Row>
				<div className='h-divider'></div>
				<Row>
					<Col className='d-flex justify-content-center align-itmes-center'>
						<p className='display-4'>Founder's Day</p>
					</Col>
				</Row>
				<Row className='d-flex justify-content-center mb-3'>
					<Col xs={8} lg={6} className='d-flex justify-content-center align-items-center text-light'>
						<Image src='/FoundersDay.jpg' fluid rounded className='shadow' />
					</Col>
					<Col xs={8} lg={6} className='d-flex flex-column justify-content-center align-items-center text-dark mt-2'>
						<p className='text-dark lead text-center'>
							With Mariachis, tacos, beer, ladies and cake; life doesn't get much better <a className='text-primary' href='foundersDayPage'>read more</a>.
                </p>
						<Button disabled variant="success" size='lg'>Donate</Button>
					</Col>
				</Row>
				<div className='h-divider'></div>
				<Row className='py-2'>
					<Col>
						<p className='display-4 text-center'>Keg Credits</p>
					</Col>
				</Row>

				<Row>
					<Col lg={6} xs={12} >
						<CardGroup className='d-flex justify-content-center align-items-stretch flex-wrap'>
							<Card border='light' className='m-2 shadow' style={{ maxWidth: '300px' }}>
								<Card.Img variant='top' src='/kegCoin.png' className='my-2 mx-auto' style={{ height: '122px', width: '122px' }} />
								<Card.Body>
									<Card.Title className='text-dark text-center'>1 Credit</Card.Title>
									<Card.Text className='text-dark text-center '> Purchase a quarter barrel AKA Pony Keg</Card.Text>
								</Card.Body>
							</Card>
							<Card border='light' className='m-2 shadow' style={{ maxWidth: '300px' }}>
								<Card.Img variant='top' src='/KegCoins.png' className='my-2 mx-auto' style={{ height: '122px', width: '182px' }} />
								<Card.Body>
									<Card.Title className='text-dark text-center'>2 Credits</Card.Title>
									<Card.Text className='text-dark text-center '> Purchase a half barrel AKA Full Keg</Card.Text>
								</Card.Body>
							</Card>
						</CardGroup>
					</Col>
					<Col lg={6} xs={12} className='d-flex justify-content-center align-items-center text-dark'>
						<blockquote className='blockquote text-center'>
							<p>You’re everyone’s favorite member when it’s your turn to buy.</p>
							<footer className='blockquote-footer d-flex justify-content-end mt-3 mr-3'><cite title='Source Title'>Rob Crenshaw</cite></footer>
						</blockquote>
					</Col>
				</Row>

				<Row className='pt-4 px-2 mb-3'>
					<Col className='d-flex flex-column justify-content-center align-items-center'>
						<p className='h3 text-dark pb-3'>A low credit number qualifies you to buy our next keg.</p>
						<Button
							href='/stats'
							variant='primary'
							size='lg'
						>
							View Keg Stats
                    </Button>
					</Col>
				</Row>
				<div className='h-divider'></div>
				<Row className='flex-row justify-content-center flex-grow-1 py-5'>
					<Col lg={6} xs={12} className='d-flex flex-column justify-content-center align-items-center'>
						<Image rounded src='/Hop.png' className='mx-auto d-block my-3' style={{ maxWidth: '50%', height: 'auto' }} />
					</Col>
					<Col lg={6} xs={12} className='d-flex flex-column justify-content-center align-items-center py-3'>
						<p className='lead text-center'>Brewing Process and Beer Styles...</p>
						<p className='text-center mb-3'>
							Want to learn from the experts? Visit the link below for an illustrative presentation on the brewing process.</p>
						<Button
							href='/styles'
							variant='outline-success'
							className='text-center mt-3'
							size='lg'>
							Read More
                </Button>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	)
}

export const getServerSideProps = async ctx => {
	const { query } = ctx
	const notificationData = await getNotificationData(query)
	return {
		props: {
			notificationData
		}
	}
}

export default Home
