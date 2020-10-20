import React from 'react'
import firebase from '../lib/firebase'
import Head from 'next/head'
import Navigation from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Row, Col, Media, CardDeck, Card } from 'react-bootstrap'

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
			<Header />
			<Container>
				<Row className="fluff">
					<Media>
						Upon joining, members get their MSD, which is the date of their keg purchase as it is recorded in the official .
						After the MSD is the coterie or clan into which each member is associated. It's a group of five to ten members who joined at approximately the same time. The names of each coterie are derived from naval traditions, periodic table elements and a quip to frequent flier or credit card member statuses. See if you can figure it out.
					</Media>
				</Row>

				<Row>
					<Col>
							{profiles.map((profile) =>
								<Media className="card-horizontal" key={profile.id}>
									<img className="profile-img" src={downloadUrl(profile.img)} />
									<Media.Body ClassName="profile-body">
										<h5 className="profile-name">{profile.name}</h5>
										<p>Mbr # {profile.number}</p>
										<h5>Bio:</h5>
										<p className="profile-bio">{profile.bio}</p>
									</Media.Body>
								</Media>

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
