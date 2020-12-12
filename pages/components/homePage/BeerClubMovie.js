import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

const BeerClubMovie = () => (
    <>
    <Container fluid className='bg-dark text-white'>
      <Row className="justify-content-center">
        <h1 className='display-3 pt-4'>The Movie</h1>
      </Row>
      <Row className="justify-content-center">
        <h3>We are the Island Beer Club - Founded in 2004</h3>
      </Row>
      <Row className='justify-content-center'>
      <div className='w-75 py-4'>
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