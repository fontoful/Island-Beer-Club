import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Row, Col } from 'react-bootstrap'

const FoundersDay = () => {
	return (
		<>
			<Head>
				{/* head */}
				<title>Island Beer Club | Founders Day</title>
			</Head>

			<Header />

			<main className='founders-day mt-4'>
				<Container>
					<Row className='text-center mb4'>
						<Col lg={6} className='text-center'>
							<h1>IBC Founder's Day History</h1>
							<p>
								<strong>
									IBC was founded on 22 March 2004.
								</strong>
								the first beer purhcased was Ballast Pt Pale
								Ale.
							</p>
							<p>
								<strong>Founders Day Beginnings:</strong> On 20
								March 2013, the IBC Lutetium and Ytterbium Clans
								banded together to host a solemnization and
								tribute in honor of the five Founders of our
								august creation. Thus started the tradition of
								Founder's Day.
							</p>
							<p>
								<strong>Founders Day I</strong> 20 March 2013,
								organizers: Tony Russell-Mbr 165, Rod
								Neilson-169 and John Parma-Mbr 176 (not in
								attendance); Jon Sanchioli-Mbr 177, Tim
								Sexton-Mbr 174, John Sexton-Mbr 172,and Jason
								Anderson-Mbr 166. They were poetically supported
								by Jim “Poem Stranger” Knox-Mbr 141.
							</p>
							<p>
								<strong>Founders Day II</strong>19 M arch 2014,
								organized by the Ytterbium, Zirconium and Double
								Centurion Clans. Participants were: Kippy #12
								(food and band), Fargy #47 (absolution keg),
								Noah #195, Lordy #190, Sandke #182, JJ #205
								(beer runs for founders), Lorentzen #199, Alisa
								#193 (emcee), Rod #169 (Video), Roger #171
								(Tiles), Bear #179, Canty #186, Plunkett #184,
								Delo #202, Jim #141 (IBC poet laureate). Helped
								with the planning but were not able to attend
								the event: Doc Seibert #196, Josh Flage #198,
								Jason Anderson #166, and Paul Bandini #204.
							</p>
						</Col>
						<Col lg={6}>
							<small>Founder's Day II - Wed, 19 March 2014</small>
							{/* <img
								src='./assets/FoundersDayII.jpg'
								alt="Founder's day"
							/> */}
							<p>
								<strong>
									Founder's Day 2014 - Emcee Alisa Kerr-Mbr
									#193
								</strong>
							</p>
							<p>
								Founder's Day II, our tenth annaversary,
								celebrated Wed, 19 March. Organized by the
								Zirconium Exquisite and Double Centurion Clans.
							</p>
							<p>
								Watch our first Video submitted by Rod
								Neilson-Mbr #169:
							</p>
							<p>
								<a href='https://www.youtube.com/watch?v=nPCawAq0P6M&feature=youtu.be'>
									Click here to watch the video
								</a>
							</p>
							<p>
								Read and/or download the Founders Tribute Poem
								written by the Island Beer Club Poet Lareate, im
								Knox-Mbr #141
								<a href='http://islandbeerclub.com/PDFs/FoundersTributePoem2014.pdf?v=nPCawAq0P6M&feature=youtu.be'>
									Click here to view or download
								</a>
							</p>
						</Col>
					</Row>
				</Container>
			</main>

			<Footer />
		</>
	)
}

export default FoundersDay
