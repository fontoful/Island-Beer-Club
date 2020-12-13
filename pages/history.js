import Head from 'next/head'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navigation from './components/Navigation'
import Row from 'react-bootstrap/Row'
import Footer from './components/Footer'

const History = () => (
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
				<p className='display-3'>Beer Club Histroy</p>
			</Jumbotron>

			<Row className='d-flex flex-column flex-grow-2 w-100'>
				<Col className='text-dark'>
					<Image
						fluid
						src='/JeffChair.jpg'
						thumbnail
						style={{ float: 'left', width: '30%', height: 'auto' }}
						className=' shadow m-3'
					/>
					<p className='lead indent pt-3 pl-3'>
						On a magnificent afternoon, mid-March in 2004, the
						Island Beer Club (IBC) was founded. Jeff “Bones” Wilkens
						(Mbr#1), John “Old Doc” Morton (Mbr#2), John “Cruncher”
						Muncy (Mbr#3) and Wayne “Big Oly” Oldendorph (Mbr#4)
						decided to sample hand-crafted, full-bodied beers from
						local microbreweries in the San Diego, California, area.
						After multiple thirst-quenching stops, our four boys
						ended up at the Ballast Point Brewing Company near the
						University of San Diego campus. It was there that a
						kegerator, on display for sale, caught the guys’
						interest. The thought emerged… “Wouldn’t it be cool if
						we could enjoy a cold, hand-crafted, micro-brewed beer
						without the hassle of traveling off of the “Rock?”
					</p>
					<p className='lead indent pt-2 pl-3'>
						Since great ideas require intense thought and
						discussion, our four-man brew crew adjourned to the VFW
						bar in Coronado, CA for further liquid refreshment. At
						the “V” the team agreed to form a beer club. Bones would
						be the “capital” man—he would purchase a kegerator and
						allow his garage to be used for micro brew-beer-sampling
						sessions. Other Club members would purchase kegs of
						beer, as required. Having established the basic charter
						for the club, the guys then adjourned to the Little Club
						bar, in Coronado, to celebrate their brilliant thoughts
						and begin the membership campaign.
					</p>
					<p className='lead indent pt-2 pl-3'>
						Our man of action, Bones, purchased the kegerator just a
						few days later. And, on Monday, March 22, 2004, Old Doc
						delivered the first keg, Ballast Point Yellowtail Pale
						Ale. Shortly thereafter, our Original Four designated
						Rob “Crenny” Crenshaw Fifth Founder, who joined in on
						the afternoon beer sampling sessions for Coronado’s new
						beer aficionados. He became Member#5 after he purchased
						his first keg.
					</p>
					<p className='lead indent pt-2 pl-3'>
						Meeting at 4 pm, the five grew fond of watching Jerry
						Springer (not much else on the tube at that time) and
						discussing the happenings in the universe. It was here
						that the boys developed the IBC motto—“More Time than
						Money” — to reflect the retired status of most of the
						Beer Club’s stately members. The Founders also developed
						the club’s membership obligation: Buy a keg of
						hand-crafted beer and you are a member. About ten months
						into our new Club activities, we needed to solve a
						problem for Jeff’s spousal unit, Loie (aka Mrs. Bones).
						All this time from inception, Club members were allowed
						to visit the restroom facilities in the house.
						Unfortunately, those waiting outside for the facility to
						“clear” would relieve themselves in Loie’s garden… This
						was intolerable.
					</p>
					<p className='lead indent pt-2 pl-3'>
						On the first anniversary of the Beer Club, the first
						urinal was installed. In 2013 the original urinal was
						retired and replaced with a waterless urinal.
						Unfortunately, nowadays, our meeting location may not
						offer a lady’s restroom.
					</p>
					<p className='lead indent pt-2 pl-3'>
						Always alert and “forward observant” (looking to the
						future), Bones purchased the domain name,
						www.islandbeerclub.com. He knew that it might be
						worthwhile, but he had no idea what to do with it or how
						it would be helpful… so we sat on it until July of 2006.
						At this point, Crenny had gained some experience in
						website development and was hosting the website for the
						Sea ’N Air Men’s Golf Club. That was all we needed. A
						few pages were developed, and the IBC website was
						officially published in July 2006. This award-winning
						website is the envy of beer clubs everywhere.
					</p>
					<p className='lead indent pt-2 pl-3'>
						Signage plays a big part at the Island Beer Club. In
						August 2006, our alley became “Beer Belly Blvd.” A year
						later a permanent brass marker was installed
						commemorating the site of the IBC Headquarters. October
						2007 had John Clampitt (Mbr#18) deliver and install a
						hand-crafted, kiln-fired tile plaque to identify the
						clubhouse of the IBC.
					</p>
					<p className='lead indent pt-2 pl-3'>
						John Weiman (Mbr#151), Weiman Design, designed our logo
						in late October 2007; allowing us to acquire our now
						highly sought after, custom apparel and glassware.
					</p>
					<p className='lead indent pt-2 pl-3'>
						In our first fourteen years of existence, we have
						continually improved and upgraded the facility to
						include a commercial popcorn maker (compliments of Mike
						Herlihy (Mbr57), two additional beer kegerator’s (thanks
						Bones Mbr#1), a granite wash sink (thanks to IBC plumber
						Bob Ryan (Mbr#120) and granite donator Ed Carney
						(Mbr#58), two flame-thrower outdoor heaters and numerous
						beer-oriented signs. Also, the Island Beer Club banner
						has been on many photo ops including the top of
						Kilimanjaro, 2012 Super Bowl and, a $16 million cocaine
						bust out of Costa Rica. Between, 2011 and 2018, we more
						than tripled our membership as we focused on recruiting
						beer aficionados with enough disposable income to
						provide a keg of hand-crafted beer. As of June 2020, we
						have 407 members.
					</p>
					<p className='lead indent pt-2 pl-3'>
						Every March, on the Wednesday closest to 22 March, we
						celebrate the anniversary of the Island Beer Club by
						holding a Founders Day party. This event honors the five
						Founders for creating Coronado’s favorite weekly alley
						beer gathering.
					</p>
					<p className='lead indent pt-2 pl-3'>
						We lost Jeffery “Bones” Wilkens, (Mbr#1), on 6 Jul 2019.
						On 7 Aug 2019, a huge turnout joined together in Beer
						Belly Blvd to recognize Jeff, celebrate his life and
						salute his passion for and contribution to the Island
						Beer Club. On 4 Sep 2019 IBC Headquarters, at 851 J Ave,
						was retired and on the same day, we celebrated the Grand
						Opening of the IBC Clubhouse next door at 857 J Ave, Rod
						Neilson’s (Mbr #169) house.
					</p>
				</Col>
			</Row>
			<Footer />
		</Container>
	</>
)

export default History
