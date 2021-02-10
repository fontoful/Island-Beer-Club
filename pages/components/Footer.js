import Link from 'next/link'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
const Footer = () => (
        <Container fluid className='ibc-footer bg-dark'>
            <Row className='justify-content-center align-content-center text-light'>
                <Col className='ibc-footer-col'>
                <Image src='/IBCLogo2.png' fluid className='footer-brand m-2' />
                </Col>
                <Col className='ibc-footer-col'>
				<Link href='https://islandbeerclub.com' passHref>
                    <Nav.Link>Island Beer Club</Nav.Link></Link>
                </Col>
            </Row>
        </Container>
		
	)


export default Footer
