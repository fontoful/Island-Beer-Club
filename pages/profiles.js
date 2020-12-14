import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { loadProfiles } from './api/profiles'
import Head from 'next/head'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Footer from './components/Footer'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navigation from './components/Navigation'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

//console.log(firebase.storage())
const getUrl = pathToFile => {
	const bucket = 'island-beer-club.appspot.com'
	const img = pathToFile
	const downloadToken = 1
	return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(
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
			<Container className='bg-light px-0'>
				<Navigation />
				<Jumbotron fluid className='profile-jumbotron'>
					<p className='display-2'>Member Profiles</p>
				</Jumbotron>
				<div className='profile-search__container'>
					<Form
						className='profile-search__form'
						onSubmit={handleFormSubmit}
					>
						<input
							className='profile-search__input'
							type='text'
							name='searchField'
							placeholder='Search by name...'
							defaultValue={router.query.search}
						/>
						<Button type='submit' size='xxl'>
							Search
						</Button>
					</Form>
				</div>
				<div className='profile__container'>
					{profiles.map(profile => (
						<div key={profile.mbr} className='profile-card shadow'>
							<div className='profile-header'>
								<Image
									className='profile-img'
									thumbnail
									src={getUrl(profile.img)}
								/>
								<div className='profile-stats text-light'>
									<h4>{profile.name} </h4>
									<h5>MSD: {profile.msd}</h5>
									<h6>Sponsor: {profile.sponsor}</h6>
								</div>
								<div className='profile-number pt-2 text-light'>
									<h3>#{profile.mbr}</h3>
								</div>
							</div>
							<div className='profile-navigation'>
								<Tabs
									defaultActiveKey='bio'
									id='uncontrolled-tab-example'
								>
									<Tab
										eventKey='bio'
										title='Bio'
										className='profile-body'
									>
										{profile.bio.length === 0
											? 'No bio.'
											: profile.bio}
									</Tab>
									<Tab
										eventKey='likes'
										title='Likes'
										className='profile-body'
									>
										{profile.likes.length === 0
											? 'No likes.'
											: profile.likes}
									</Tab>
									<Tab
										eventKey='dislikes'
										title='Dislikes'
										className='profile-body'
									>
										{profile.dislikes.length === 0
											? 'No dislikes.'
											: profile.dislikes}
									</Tab>
									<Tab
										eventKey='hobbies'
										title='Hobbies'
										className='profile-body'
									>
										{profile.hobbies.length === 0
											? 'No hobbies.'
											: profile.hobbies}
									</Tab>
									<Tab
										eventKey='nicknames'
										title='Nicknames'
										className='profile-body'
									>
										{profile.nicknames.length === 0
											? 'No nicknames.'
											: profile.nicknames}
									</Tab>
								</Tabs>
							</div>
						</div>
					))}
				</div>
				<Footer />
			</Container>
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
