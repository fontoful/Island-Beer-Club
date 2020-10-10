import React from 'react'
import firebase from '../lib/firebase'
import Head from 'next/head'
import Navigation from '../components/navbar'
import Hero from '../components/header'
import Footer from '../components/footer'
import { Container, Row, Col, Media, CardGroup, Card } from 'react-bootstrap'

function Profiles({ profilesTest }) {

	return (
		<>
			<Head>
				{/* head */}
				<title>Island Beer Club | Members</title>
			</Head>
			<Navigation />
			<Hero />
			<Container>
				<Row className="fluff">
					<Media>
						Upon joining, members get their MSD, which is the date of their keg purchase as it is recorded in the official .
						After the MSD is the coterie or clan into which each member is associated. It's a group of five to ten members who joined at approximately the same time. The names of each coterie are derived from naval traditions, periodic table elements and a quip to frequent flier or credit card member statuses. See if you can figure it out.
					</Media>
				</Row>

				<Row className="row profiles">
					{profilesTest.map((profile) => (
						<Col xs="12" md="6" lg="4">
							<CardGroup>
								<Card className="profile-card-5">
									<Card.Img className="card-img-block" src="profile2.jpeg" alt="Member Profile Image" />
									<Card.Body>
										<Card.Title>{profile.name}</Card.Title>
										<Card.Text>Mbr # {profile.number}</Card.Text>
										<Card.Title>Bio:</Card.Title>
										<Card.Text>{profile.bio}</Card.Text>
									</Card.Body>
								</Card>
							</CardGroup>
						</Col>
					))}

				</Row>
			</Container>
			<Footer />
		</>
	)
}

export const getStaticProps = async () => {

	const snapshot = await firebase.firestore().collection('profilesTest').get()
	const data = snapshot.docs.map(doc => doc.data())
	return {
		props: {
			profilesTest: data,
		},
	}
}

export default Profiles