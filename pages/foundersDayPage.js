import Head from 'next/head'
import React, { useState } from 'react';
import {
    NeilsonModal,
    WeisbrodModal,
    KayeModal,
    StricklandModal
} from '../components/Modals'
import { Button, Col, Container, Image, Jumbotron, ListGroup, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import NavHandler from '../components/NavHandler'
import getNotificationData from './api/notifications'

const FoundersDayPage = ({ notificationData }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const notifications = notificationData
    return (
        <>
            <Head>
                <title> IBC | Founders Day</title>
                <link rel="icon" href="/beer-solid.svg" />
            </Head>
            <NavHandler notifications={notificationData} />

            <Jumbotron fluid className='d-flex justify-content-center align-items-center text-light beer-cheer w-100 mb-0'>
                <p className='h2'>IBC Founders Day</p>
            </Jumbotron>

            <Container fluid className='bg-white px-0'>
            <Row className='mx-auto'>
                <Col className='d-flex flex-column justify-content-center align-items-center pt-2'>
                    <p className='h4 text-center'>Founders Day Beginnings</p>
                    <p className='px-3 indent'>
                        On 20 March 2013, the IBC Lutetium and Ytterbium Clans banded together to host a solemnization and tribute in honor of the five Founders of our august creation. Thus started the tradition of Founder's Day.
                </p>
                </Col>
            </Row>

            <Row className='mx-auto my-3 py-3 bg-light'>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <p className='d-flex h2 my-4'>Founder's Day 1<b className='align-self-center pl-3'>20 March 2013</b></p>
                    <p className='px-4 indent'>
                        Our first ever Founder's Day was cleverly contrived, precisely planned and exceptionally executed by our most junior members: Organizers Tony Russell-Mbr 165, Rod Neilson-169 and John Parma-Mbr 176(not in attendance); Jon Sanchioli-Mbr 177, Tim Sexton-Mbr 174, John Sexton-Mbr 172,and Jason Anderson-Mbr 166. They were poetically supported by Jim “Poem Stranger” Knox-Mbr 141.
                </p>
                </Col>
                <Col xs='12' className='d-flex flex-column justify-content-center align-items-center'>
                    <Image fluid src='foundersDay1.jpg' />
                </Col>

            </Row>
            <Row className='mx-auto'>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <p className='d-flex h2 my-4'>Founder's Day 2<b className='align-self-center pl-3'>19 March 2014</b></p>
                    <p className='px-4 indent'>
                        Organized by the Ytterbium, Zirconium and Double Centurion Clans. Participants were: Kippy #12 (food and band), Fargy #47 (absolution keg), Noah #195, Lordy #190, Sandke #182, JJ #205 (beer runs for founders), Lorentzen #199, Alisa #193 (emcee), Rod #169 (Video), Roger #171 (Tiles), Bear #179, Canty #186, Plunkett #184, Delo #202, Jim #141 (IBC poet laureate). Helped with the planning but were not able to attend the event: Doc Seibert #196, Josh Flage #198, Jason Anderson #166, and Paul Bandini #204.
                </p>
                </Col>
                <Col xs='12' className='d-flex justify-content-center'>
                    <Image fluid src='/FoundersDay.jpg' />
                </Col>
            </Row>
            <Row className='mx-auto my-4 w-85'>
                <Col className='my-card shadow'>
                    <p className='flex-grow-1 text-center pb-2'>Watch our first Video submitted by: Rod Neilson - Mbr #169</p>
                    <Button
                        variant='secondary'
                        size='lg'
                        onClick={() => setModalShow(true)}
                        disabled>
                        Play
                </Button>
                    <NeilsonModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Col>
                <Col className='my-card shadow'>
                    <p className='align-self-start text-center pb-2'>View the Founders Tribute Poem written by the IBC Poet Laureate, Jim Knox-Mbr #141:</p>
                    <Button
                        target='blank'
                        href='/foundersPoem.pdf'
                        size='lg'>
                        View
                </Button>
                </Col>
            </Row>

            <Row className='mx-auto my-4 bg-light w-100 p-4'>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <p className='h2 my-4 align-self-center'>Test Your IBC Knowledge</p>
                    <ListGroup>
                        <ListGroup.Item>What gift did Loie get?</ListGroup.Item>
                        <ListGroup.Item>Which Founder was missing?</ListGroup.Item>
                        <ListGroup.Item>Why was Jon Sanchioli chosen as Emcee?</ListGroup.Item>
                        <ListGroup.Item>Who is the official IBC Poet Laureate?</ListGroup.Item>
                        <ListGroup.Item>What's the purpose of the Beer Fairy Chimes?</ListGroup.Item>
                        <ListGroup.Item>Why were the Founder's wearing green hats?</ListGroup.Item>
                        <ListGroup.Item>How many official IBC members were there on Founder's Day?</ListGroup.Item>
                        <ListGroup.Item>Where does IBC keep a tally of beer consumed?</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

            <Row className='mx-auto my-4'>
                <Col className='d-flex justify-content-center'>
                    <p className='h2 my-4 align-self-center'>IBC Videos</p>
                </Col>
            </Row>

            <Row className='mx-auto my-4'>
                <Col className='my-card shadow'>
                    <p className='align-self-center text-center pb-2'>Filmed by Ed Weisbrod:</p>
                    <Button
                        variant='primary'
                        size='lg'
                        onClick={() => setModalShow(true)}
                    >
                        Play
                </Button>
                    <WeisbrodModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Col>
                <Col className='my-card shadow'>
                    <p className='align-self-center text-center pb-2'>Filmed by Scott Kaye:</p>
                    <Button
                        variant='secondary'
                        size='lg'
                        disabled
                        onClick={() => setModalShow(true)}
                    >
                        Play
                </Button>
                    <KayeModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Col>
                <Col className='my-card shadow'>
                    <p className='align-self-center text-center pb-2'>Filmed by Wayne Strickland:</p>
                    <Button
                        variant='primary'
                        size='lg'
                        onClick={() => setModalShow(true)}
                    >
                        Play
                </Button>
                    <StricklandModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Col>
            </Row>

            <Row className='mx-auto my-4'>
                <Col className='d-flex justify-content-center'>
                    <p className='h2 my-4 align-self-center'>IBC Poems</p>
                </Col>
            </Row>

            <Row className='mx-auto my-4 w-85'>
                <Col className='my-card shadow'>
                    <p className='align-self-center h5 text-center pb-2'>Original Scrips</p>
                    <p>This reads like a military Operations Order (OPORD). It has timing, stage directions, placement guidance, limericks and warnings.</p>
                    <Button
                        target='blank'
                        href='/foundersPoemOriginal.pdf'
                        size='lg'
                    >
                        View
                </Button>
                </Col>
                <Col className='my-card shadow'>
                    <p className='align-self-center h5 text-center pb-2'>Ode to Our Founders</p>
                    <p>An original poem written exclusively for the IBC Founder's Day celebration by the IBC's Poet Laureate, Jim Knox, CHS '60, IBC Mbr#141.</p>
                    <Button
                        target='blank'
                        href='/foundersPoemOde.pdf'
                        size='lg'
                    >
                        View
                </Button>
                </Col>
            </Row>

            <Footer />
        </Container>
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

export default FoundersDayPage