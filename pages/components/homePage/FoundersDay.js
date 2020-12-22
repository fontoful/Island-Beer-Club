import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const FoundersDay = () => (
    <>
    <Container fluid className='d-flex flex-column justify-content-center section py-4 bg-light'>
        <Row>
            <Col className='d-flex justify-content-center align-itmes-center'>
                <p className='display-3'>Founder's Day</p>
            </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
            <Col xs={8} lg={6} className='d-flex justify-content-center align-items-center  py-4 text-light'>
                <Image src='/FoundersDay.jpg' fluid rounded className='shadow' />
            </Col>
            <Col className='d-flex flex-column justify-content-center align-items-center text-dark'>
                <p className='text-dark h5 pb-4 text-center'>
                    With Mariachis, tacos, beer, ladies and cake; life doesn't get much better <a className='text-primary' href='foundersDayPage'>read more</a>.
                </p>
                <Button disabled variant="flat" size='xxl'>Donate</Button>
            </Col>
        </Row>

    </Container>
    </>
)

export default FoundersDay