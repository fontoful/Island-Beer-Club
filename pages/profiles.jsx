import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { loadProfiles } from './api/profiles'
import firebase from '../lib/firebase'
import Head from 'next/head'
import Navigation from '../components/navbar'
import Footer from '../components/footer'
import {
	Form,
	Button,
	FormControl,
	Jumbotron,
	Container,
	Row,
	Col,
	Image,
	Card,
} from 'react-bootstrap'
import DynamicFont from 'react-dynamic-font'

// hard-coded URL endpoint
// https://firestore.googleapis.com/v1/projects/island-beer-club/databases/(default)/documents/profilesTest/

const downloadUrl = pathToFile => {
	const bucket = 'island-beer-club.appspot.com'
	const img = pathToFile
	const downloadToken = 1
	return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/resources%2F${encodeURIComponent(
		img,
	)}?alt=media&token=${downloadToken}`
}

const Profiles = props => {
	const router = useRouter()
	const [profiles, setProfiles] = useState(props.profiles)

	const handleFormSubmit = async e => {
		e.preventDefault()

		const searchInput = e.target.searchField.value
		const query = {}

		const response = await fetch(`/api/profiles?search=${searchInput}`)
		const { profiles } = await response.json()
		setProfiles(profiles)

		if (searchInput !== '') {
			query.search = searchInput
		}
		router.push({
			pathname: router.pathname,
			query,
		})
	}
	return (
		<>
			<Head>
				<title>Island Beer Club | Profiles</title>
			</Head>
			<Navigation />
			<Jumbotron fluid align='center' className='page-header'>
				<Container style={{ color: 'whitesmoke' }}>
					<h2 style={{ fontFamily: "'Roboto Slab', serif" }}>
						Island Beer Club Member Profiles
					</h2>
				</Container>
			</Jumbotron>{' '}
			<Container>
				<Row>
					<Form onSubmit={handleFormSubmit}>
						<input
							type='text'
							name='searchField'
							defaultValue={router.query.search}
						/>
						<Button type='submit'>Search</Button>
					</Form>
					<Col>
						{profiles.map(profile => (
							<div key={profile.id}>
								<Jumbotron className='profile-card' fluid>
									<Row className='profile-header'>
										<Col xs={5} md={3} lg={2}>
											<Image
												className='profile-img'
												thumbnail
												src={downloadUrl(profile.img)}
											/>
										</Col>
										<Col
											xs={5}
											md={5}
											lg={6}
											className='profile-header-text'
										>
											<DynamicFont
												smooth
												content={profile.name}
											/>
											<h5>Mbr # {profile.number}</h5>
										</Col>
									</Row>
									<Row>
										<Col style={{ padding: '5px 20px' }}>
											<h5>Bio:</h5>
											<p className='profile-bio'>
												{profile.bio}
											</p>
										</Col>
									</Row>
								</Jumbotron>
							</div>
						))}
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	)
}

export const getServerSideProps = async ctx => {
	const { query } = ctx
	const profiles = await loadProfiles(query)

	return {
		props: {
			profiles,
		},
	}
}
export default Profiles
