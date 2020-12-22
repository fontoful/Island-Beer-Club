import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

const BeerClubMovie = () => (
    <>
    <Container fluid className='bg-secondary text-white py-4'>
      <Row className="d-flex justify-content-center">
        <Col className='text-center'>
          <h1 className='display-3'>The Movie</h1>
        </Col>
      </Row>
      <Row className="d-flex flex-column justify-content-center text-center px-3">
        <Col>
          <p className='lead'>We are the Island Beer Club</p>
        </Col>
      </Row>
      <Row className='justify-content-center'>
      <div className='w-75 py-1'>
        <ResponsiveEmbed aspectRatio='16by9'>
							<embed
								src='https://www.youtube.com/embed/5q_aWSWDn94'
							/>
						</ResponsiveEmbed>
        </div>
      </Row>

      </Container>
    </>
)

export default BeerClubMovie