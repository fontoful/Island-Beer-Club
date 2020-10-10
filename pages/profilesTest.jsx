import React, { useState, useEffect } from 'react'
import firebase from '../lib/firebase'
import Head from 'next/head'
import Navigation from '../components/navbar'
import Hero from '../components/header'
import Footer from '../components/footer'
import { Container, Row, Col, Media, CardGroup, Card, Button } from 'react-bootstrap'

//var gsReference = storage.refFromURL('gs://island-beer-club.appspot.com') 
function useProfiles() {

	const [profiles, setProfiles] = useState([])
	useEffect(() => {
		firebase
			.firestore()
			.collection('profilesTest')
			.onSnapshot((snapshot) => {
				const newProfiles = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data()
				}))
				setProfiles(newProfiles)
			})
	}, [])
	return profiles
}

const Profiles = () => {
	const profiles = useProfiles()
	const showimage = () => {
		const storageRef = firebase.storage().ref()
		const img = storageRef.storage.refFromURL('gs://island-beer-club.appspot.com')
		//var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg')
		return (img)
		}
	return (
		<>
			<Head>
				{/* head */}
				<title>Island Beer Club | Member</title>
			</Head>
			<Hero />
			<Navigation />
			<Container>
				<Row className="fluff">
					<Media>
						Upon joining, members get their MSD, which is the date of their keg purchase as it is recorded in the official .
						After the MSD is the coterie or clan into which each member is associated. It's a group of five to ten members who joined at approximately the same time. The names of each coterie are derived from naval traditions, periodic table elements and a quip to frequent flier or credit card member statuses. See if you can figure it out.
					</Media>
				</Row>
				<Row className="row profiles">
					{profiles.map((profile) =>

						<Col xs="12" md="6" lg="4">
							<CardGroup>
								<Card className="profile-card-5">
									<Card.Body>
										<Card.Img src={showimage([profile.img])} height="125px" width="200px"/>
										<Card.Title>{profile.img}</Card.Title>
										<Card.Title>{profile.name}</Card.Title>
										<Card.Text>Mbr # {profile.number}</Card.Text>
										<Card.Title>Bio:</Card.Title>
										<Card.Text>{profile.bio}</Card.Text>
									</Card.Body>
								</Card>
							</CardGroup>
						</Col>
					)}
				</Row>
			</Container>
			<Footer />
		</>
	)
}

export default Profiles
