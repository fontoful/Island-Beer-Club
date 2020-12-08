import Head from 'next/head'
import React, { useState } from 'react';

import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Footer from './components/Footer'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ListGroup from 'react-bootstrap/ListGroup'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Modal from 'react-bootstrap/Modal'
import Navigation from './components/Navigation'
import Row from 'react-bootstrap/Row'

function VerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Submitted By: Rod Neilson - Mbr #141
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ResponsiveEmbed aspectRatio='16by9'>
                <embed
                    src='https://www.youtube.com/watch?v=nPCawAq0P6M&feature=youtu.be'
                />
            </ResponsiveEmbed>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center align-items-center'>
          <Button size='xxl' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

const FoundersDayPage = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
    <>
    <Head>
        <title> IBC | Founders Day</title>
        <link rel="icon" href="/beer-solid.svg" />
    </Head>
    <Container className=' bg-white px-0'>
        <Navigation />

        <Jumbotron fluid className='d-flex justify-content-center align-items-center text-light beer-cheer w-100'>
        <p className='display-3'>IBC Founders Day</p>
        </Jumbotron>
        <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
                <p className='display-3'>Founders Day Beginnings</p>
                <p className='lead px-3'>On 20 March 2013, the IBC Lutetium and Ytterbium Clans banded together to host a solemnization and tribute in honor of the five Founders of our august creation. Thus started the tradition of Founder's Day.</p>
            </Col>
        </Row>
        
        <Row className='d-flex py-4 justify-content-start align-items-center w-100'>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
                <p className='d-flex h2'>Founder's Day 1<b className='align-self-center pl-3'>20 March 2013</b></p>
                <p className='px-4 lead indent'>Our first ever Founder's Day was cleverly contrived, precisely planned and exceptionally executed by our most junior members: Organizers Tony Russell-Mbr 165, Rod Neilson-169 and John Parma-Mbr 176(not in attendance); Jon Sanchioli-Mbr 177, Tim Sexton-Mbr 174, John Sexton-Mbr 172,and Jason Anderson-Mbr 166. They were poetically supported by Jim “Poem Stranger” Knox-Mbr 141. </p>
            </Col>
            <Col>
                <Image src='foundersDay1.jpg' />
            </Col>
                
        </Row>
        <Container fluid className='d-flex flex-column justify-content-center align-items-center bg-light pb-4'>
        <Row className='d-flex py-4 justify-content-center align-items-center bg-light w-100'>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
                <p className='d-flex h2'>Founder's Day 2<b className='align-self-center pl-3'>19 March 2014</b></p>
                <p className='px-4 lead indent'>Organized by the Ytterbium, Zirconium and Double Centurion Clans. Participants were: Kippy #12 (food and band), Fargy #47 (absolution keg), Noah #195, Lordy #190, Sandke #182, JJ #205 (beer runs for founders), Lorentzen #199, Alisa #193 (emcee), Rod #169 (Video), Roger #171 (Tiles), Bear #179, Canty #186, Plunkett #184, Delo #202, Jim #141 (IBC poet laureate). Helped with the planning but were not able to attend the event: Doc Seibert #196, Josh Flage #198, Jason Anderson #166, and Paul Bandini #204.</p>
            </Col>
            <Col className='d-flex justify-content-center'>
                <Image src='/FoundersDay.jpg' />
            </Col>
        </Row>
        <Row className='d-flex align-items-stretch w-50'>
                    <Col className='my-card shadow'>
                        <p className='flex-grow-1 h5 text-center pb-2'>Watch our first Video submitted by: Rod Neilson - Mbr #169</p>
                        <Button 
                            variant='secondary' 
                            size='lg' 
                            onClick={() => setModalShow(true)} 
                            disabled>
                                Play
                        </Button>
                        <VerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Col>
                    <Col className='my-card shadow'>
                        <p className='align-self-start h5 text-center pb-2'>View the Founders Tribute Poem written by the IBC Poet Laureate, Jim Knox-Mbr #141:</p>
                        <Button 
                         target='blank' 
                         href='/foundersPoem.pdf' 
                         size='lg'>
                             View
                        </Button>
                    </Col>
                </Row>
        </Container>
        <Row className='d-flex justify-content-center py-3'>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
                <p className='display-4 text-center'>Test Your IBC Knowledge</p>
                <ListGroup>
                    <ListGroup.Item className='lead'>What gift did Loie get?</ListGroup.Item>
                    <ListGroup.Item className='lead'>Which Founder was missing?</ListGroup.Item>
                    <ListGroup.Item className='lead'>Why was Jon Sanchioli chosen as Emcee?</ListGroup.Item>
                    <ListGroup.Item className='lead'>Who is the official IBC Poet Laureate?</ListGroup.Item>
                    <ListGroup.Item className='lead'>What's the purpose of the Beer Fairy Chimes?</ListGroup.Item>
                    <ListGroup.Item className='lead'>Why were the Founder's wearing green hats?</ListGroup.Item>
                    <ListGroup.Item className='lead'>How many official IBC members were there on Founder's Day?</ListGroup.Item>
                    <ListGroup.Item className='lead'>Where does IBC keep a tally of beer consumed?</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>

        <Container fluid className='d-flex flex-column justify-content-center bg-light mt-4 py-4'>
        <Row className='d-flex justify-content-center'>
            <Col className='d-flex justify-content-center'>
                <p className='display-4'>IBC Videos</p>
            </Col>
        </Row>
        <Row>
            <Col className='my-card shadow'>
                <p className='align-self-center h5 text-center pb-2'>Filmed by Ed Weisbrod:</p>
                <Button 
                 variant='secondary'
                 target='blank' 
                 href='/foundersPoem.pdf' 
                 size='lg' 
                 disabled>
                     View
                </Button>
            </Col>
            <Col className='my-card shadow'>
                <p className='align-self-center h5 text-center pb-2'>Filmed by Scott Kaye:</p>
                <Button
                 variant='secondary'
                 target='blank' 
                 href='/foundersPoem.pdf' 
                 size='lg' 
                 disabled>
                     View
                </Button>
            </Col>
            <Col className='my-card shadow'>
                <p className='align-self-center h5 text-center pb-2'>Filmed by Wayne Strickland:</p>
                <Button
                 variant='secondary'
                 target='blank' 
                 href='/foundersPoem.pdf' 
                 size='lg' 
                 disabled>
                     View
                </Button>
            </Col>
        </Row>
        </Container>

        <Container fluid className='d-flex flex-column justify-content-center mt-4 py-4'>
            <Row className='d-flex justify-content-center pt-4'>
                <Col className='d-flex justify-content-center'>
                    <p className='display-4'>IBC Poems</p>
                </Col>
            </Row>
            <Row>
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
        </Container>

        <Footer />
    </Container>
    </>
    )
}
export default FoundersDayPage