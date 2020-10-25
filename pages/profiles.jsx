import React from 'react'
import firebase from '../lib/firebase'
import Head from 'next/head'
import Navigation from '../components/navbar'
import Footer from '../components/footer'
import { Jumbotron, Container, Row, Col, Image, Card } from 'react-bootstrap'
import DynamicFont from 'react-dynamic-font';

const downloadUrl = (pathToFile) => {
	const bucket = 'island-beer-club.appspot.com'
	const img = pathToFile
	const downloadToken = 1
	return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/resources%2F${encodeURIComponent(img)}?alt=media&token=${downloadToken}`
}

const Profiles = (props) => {
	const { profiles } = props
	return (
		<>
			<Head>
				<title>Island Beer Club | Member</title>
			</Head>
			<Navigation />
			<Jumbotron fluid align='center' className="page-header">
				<Container style={{ color: 'whitesmoke' }}>
					<h2 style={{ fontFamily: "'Roboto Slab', serif" }}>Island Beer Club Member Profiles</h2>
				</Container>
			</Jumbotron>
			<Container>
					<Row>
					<Col>
						{profiles.map((profile) =>
							<Jumbotron className="profile-card" fluid key={profile.id}>
							<Row className="profile-header">
							<Col xs={5} md={3} lg={2}>
							<Image className="profile-img" thumbnail src={downloadUrl(profile.img)} />
							</Col>
							<Col xs={5} md={5} lg={6} className="profile-header-text">
							<DynamicFont smooth content={profile.name} />
							<h5>Mbr # {profile.number}</h5>
							</Col>
							</Row>
							<Row>
							<Col style={{padding:"5px 20px"}}>
							<h5>Bio:</h5>
							<p className="profile-bio">{profile.bio}</p>
							</Col>
							</Row>
							</Jumbotron>

						)}
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	)
}

export const getStaticProps = async () => {

	const snapshot = await firebase
		.firestore()
		.collection('profilesTest')
		.orderBy('number', 'asc').get()

	const data = snapshot.docs.map(doc => doc.data())

	return {
		props: {
			profiles: data,
		},
	}
}


export default Profiles
