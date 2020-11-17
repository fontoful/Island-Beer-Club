import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Intro from './homePage/Intro'
const Footer = () => (
        <Container fluid className='bg-dark'>
            <Row className='justify-content-center align-content-center text-light'>
                <Col className='d-flex justify-content-center align-content-center'>
                <Image src='/IBCLogo.png' fluid className='mx-auto' style={{ width: '50%' }} />
                </Col>
                <Col className='d-flex flex-row justify-content-center align-items-center'>
                <p>© 2020 Copyright:</p>
				<p><a href='https://islandbeerclub.com'> 🍺  {' '}Island Beer Club</a></p>
                </Col>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                Item 3
                </Col>
            </Row>
        </Container>
		
	)


export default Footer
