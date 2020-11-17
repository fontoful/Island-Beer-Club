import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

const BrewingProcess = () => (
    <>
    <Container fluid className='d-flex flex-row justify-content-center section'>
        <Row className='flex-row justify-content-center flex-grow-1'>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
            <Image src='/Hop.jpg' className='mx-auto d-block' fluid style={{ width: '50%' }} />
            </Col>
            <Col className='d-flex flex-column justify-content-center align-items-center bg-light'>
            <p className='display-4 text-center'>Brewing Process and Beer Styles...</p>
            <p className='h4 text-center mb-3'>Want to learn from the experts? Visit the link below for an illustrative presentation on the brewing process.</p>
            <Button variant='primary' className='text-center' size='xxl'>Read More</Button>
            </Col>
        </Row>
    </Container>
    </>
)

export default BrewingProcess