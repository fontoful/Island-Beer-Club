import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

const BrewingProcess = () => (
    <>
    <Container fluid className='d-flex flex-row justify-content-center section'>

        <Row className='flex-row justify-content-center flex-grow-1 py-5 bg-light'>
            <Col lg={6} xs={12} className='d-flex flex-column justify-content-center align-items-center'>
                <Image src='/Hop.png' className='mx-auto d-block my-3' style={{ maxWidth: '50%', height: 'auto' }} />
            </Col>
            <Col lg={6} xs={12} className='d-flex flex-column justify-content-center align-items-center py-3'>
                <p className='lead text-center'>Brewing Process and Beer Styles...</p>
                <p className='text-center mb-3'>
                    Want to learn from the experts? Visit the link below for an illustrative presentation on the brewing process.</p>
                <Button 
                    variant='outline-primary' 
                    disabled 
                    className='text-center mt-3' 
                    size='xxl'>
                        Read More
                </Button>
            </Col>
        </Row>

    </Container>
    </>
)

export default BrewingProcess