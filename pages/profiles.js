import React from 'react'
import db from '../lib/firebase'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Row, Col } from 'react-bootstrap'

function Profiles({ profiles }) {
	return (
		<>
			<Head>
				{/* head */}
				<title>Island Beer Club | Members</title>
			</Head>

			<Header />
			<header class="masthead">
				<div class="container h-100">
					<div class="row h-100 align-items-center">
						<div class="col-12 text-center">
							<h1 class="font-weight-light">Beer Club Profiles</h1>
							<p class="lead">Listed in order of achieving membership status.</p>
						</div>
					</div>
				</div>
			</header>
			<Container>
			<div class="row fluff">
				<h3 class="fluff">How does one become a member? <small class="text-muted">Buy a keg of hand-crafted beer.</small></h3>
			</div>
			<div class="row">
			<p class="lead">
					Upon joining, members get their <strong>MSD</strong>, which is the date of their keg purchase as it is recorded in the official .
					After the MSD is the coterie or clan into which each member is associated. It's a group of five to ten members who joined at approximately the same time. The names of each coterie are derived from naval traditions, periodic table elements and a quip to frequent flier or credit card member statuses. See if you can figure it out.
				</p>
			</div>
				<div class="row profiles">
					{profiles.map((profile) => (
						<div class="col-md-6 card-group mt-6 ">
							<div class="card profile-card-5">
								<div class="card-img-block">
									<img src="profile2.jpeg" class="card-img-top" alt="Member Profile Image"></img>
								</div>
								<div class="card-body pt-0">
									<h3 class="card-title">{profile.name}</h3>
									<p class="card-text">Mbr # {profile.number}</p>
									<h5 class="card-title">Bio:</h5>
									<p class="card-text">{profile.bio}</p>
								</div>
							</div>
						</div>
					))}

				</div>
			</Container>
			<Footer />
		</>
	)
}

export const getStaticProps = async () => {
	const snapshot = await db.collection('profiles').get()
	const data = snapshot.docs.map(doc => doc.data())
	return {
		props: {
			profiles: data,
		},
	}
}

export default Profiles
