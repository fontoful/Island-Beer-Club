import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const FoundersDay = () => (
    <>
    <Container fluid className='d-flex flex-column justify-content-center section'>

        <Row className='d-flex justify-content-center flex-grow-1'>

        <Col className='d-flex justify-content-center align-items-center bg-light text-light'>
        <Image src='/FoundersDay.jpg' fluid />
        </Col>
        <Col className='d-flex flex-column justify-content-center align-items-center bg-light text-dark'>
        <p className='display-4 text-dark mt-2 text-center'>
            Founder's Day History
        </p>
        <p className='text-dark h5 pb-4 text-center'>
            With Mariachis, tacos, beer, ladies and cake; life doesn't get much better.
        </p>
        <Button variant="flat" size='xxl'>Donate</Button>
        </Col>
        </Row>

    </Container>
    </>
)

export default FoundersDay

{/*  */}