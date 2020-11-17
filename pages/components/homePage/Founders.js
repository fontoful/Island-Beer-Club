import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'

const Founders = () => (
    <>
        <Container fluid className='founders-section' className="justify-content-center">

            <Row className="justify-content-center">
                <h1 className='display-3 pt-4'>Founders</h1>
            </Row>
            <Row className="justify-content-center text-center text-muted">
                <h3>We’re proud of our products, and we’re really excited when we get feedback from our users.</h3>
            </Row>
            <Row>
                <Col className='d-flex flex-wrap pt-4 justify-content-around'>
                    <div>
                        <Figure.Image src='/founders/JeffWilkens.jpg' rounded />
                        <Figure.Caption>
                            <p className='h4'>Jeff Wilkens</p><p>Member: #1</p>
                        </Figure.Caption>
                    </div>
                    <div>
                        <Figure.Image src='/founders/Morton.jpg' rounded />
                        <Figure.Caption>
                            <p className='h4'>John Morton</p><p>Member: #2</p>
                        </Figure.Caption>
                    </div>
                    <div>
                        <Figure.Image src='/founders/Muncey.jpg' rounded />
                        <Figure.Caption>
                            <p className='h4'>John Muncy</p><p>Member: #3</p>
                        </Figure.Caption>
                    </div>
                    <div>
                        <Figure.Image src='/founders/Oly.jpg' rounded />
                        <Figure.Caption>
                            <p className='h4'>Wayne Oldendorph </p><p>Member: #4</p>
                        </Figure.Caption>
                    </div>
                    <div>
                        <Figure.Image src='/founders/Rob.jpg' rounded />
                        <Figure.Caption>
                            <p className='h4'>Rob Crenshaw</p><p>Member: #5</p>
                        </Figure.Caption>
                    </div>
                </Col>
            </Row>

        </Container>
    </>
)

export default Founders