import Link from 'next/link'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
const Footer = () => (
    <Container fluid>
        <Row className='d-flex bg-dark text-light'>
            <Col className='d-flex justify-content-center'>
                <Image fluid src='/IBCLogo2.png' style={{height: '90px'}} className='m-2' />
            </Col>
            <Col sm={8} className='d-flex justify-content-center align-items-center'>
                <Link  href='https://islandbeerclub.com' passHref>
                    <Nav.Link style={{color: 'white'}}>
                        Island Beer Club
                    </Nav.Link>
                </Link>
            </Col>
        </Row>
    </Container>
	)


export default Footer
