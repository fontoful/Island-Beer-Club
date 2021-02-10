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
                    <h1 className='display-4'>Founders</h1>
                    <p>We’re proud of our products, and we’re really excited when we get feedback from our users.</p>
                </Col>
            </Row>
            <Row className='py-4'>
                <Col className='d-flex justify-content-center align-items-center text-center flex-wrap'>
                            <Card className='founders-imgs shadow'>
                                <Card.Img src='/founders/JeffWilkens.jpg' />
                                <Card.Body>
                                    <Card.Subtitle>Jeff Wilkens</Card.Subtitle>
                                    <Card.Text>Mbr: #1</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='founders-imgs shadow'>
                                <Card.Img src='/founders/Morton.jpg' />
                                <Card.Body>
                                    <Card.Subtitle>John Morton</Card.Subtitle>
                                    <Card.Text>Mbr: #2</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='founders-imgs shadow'>
                                <Card.Img src='/founders/Muncey.jpg' />
                                <Card.Body>
                                    <Card.Subtitle>John Muncy</Card.Subtitle>
                                    <Card.Text>Mbr: #3</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='founders-imgs shadow'>
                                <Card.Img src='/founders/Oly.jpg' />
                                <Card.Body>
                                    <Card.Subtitle>Wayne Oldendorph</Card.Subtitle>
                                    <Card.Text>Mbr: #4</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='founders-imgs shadow'>
                                <Card.Img src='/founders/Rob.jpg' />
                                <Card.Body>
                                    <Card.Subtitle>Rob Crenshaw</Card.Subtitle>
                                    <Card.Text>Mbr: #5</Card.Text>
                                </Card.Body>
                            </Card>
                        
                </Col>
            </Row>

        </Container>
    </>
)

export default Founders