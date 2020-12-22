import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const Founders = () => (
    <>
        <Container fluid className='founders-section' className="justify-content-center py-4">
            
            <Row className="justify-content-center text-center px-3">
                <Col>
                    <h1 className='display-3'>Founders</h1>
                    <p className='lead'>We’re proud of our products, and we’re really excited when we get feedback from our users.</p>
                </Col>
            </Row>
            <Row className='py-4'>
                <Col className='d-flex justify-content-center align-items-center flex-wrap'>
                            <Card className='founders-imgs shadow'>
                                <Card.Img src='/founders/JeffWilkens.jpg' />
                                <Card.Body>
                                    <Card.Title>Jeff Wilkens</Card.Title>
                                    <Card.Subtitle>Mbr: #1</Card.Subtitle>
                                </Card.Body>
                            </Card>
                            <Card className='founders-imgs shadow'>
                                <Card.Img src='/founders/Morton.jpg' />
                                <Card.Body>
                                    <Card.Title>John Morton</Card.Title>
                                    <Card.Subtitle>Mbr: #2</Card.Subtitle>
                                </Card.Body>
                            </Card>
                            <Card className='founders-imgs shadow'>
                                <Card.Img src='/founders/Muncey.jpg' />
                                <Card.Body>
                                    <Card.Title>John Muncy</Card.Title>
                                    <Card.Subtitle>Mbr: #3</Card.Subtitle>
                                </Card.Body>
                            </Card>
                            <Card className='founders-imgs shadow'>
                                <Card.Img src='/founders/Oly.jpg' />
                                <Card.Body>
                                    <Card.Title>Wayne Oldendorph</Card.Title>
                                    <Card.Subtitle>Mbr: #4</Card.Subtitle>
                                </Card.Body>
                            </Card>
                            <Card className='founders-imgs shadow'>
                                <Card.Img src='/founders/Rob.jpg' />
                                <Card.Body>
                                    <Card.Title>Rob Crenshaw</Card.Title>
                                    <Card.Subtitle>Mbr: #5</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        
                </Col>
            </Row>

        </Container>
    </>
)

export default Founders