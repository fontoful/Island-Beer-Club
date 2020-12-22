import React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

const KegCredits = () => (
    <>
        <Container fluid className='d-flex flex-column justify-content-center section'>

            <Row>
                <Col className='d-flex justify-content-center align-itmes-center'>
                    <p className='display-3 pt-3'>Keg Credits</p>
                </Col>
            </Row>

            <Row className='d-flex justify-content-center align-items-center pb-3'>
                <Col lg={6} xs={12} className='d-flex justify-content-center align-items-center text-light'>
                    <CardGroup>
                        <Card border="light" className='shadow'>
                            <Card.Img variant='top' src='/kegCoin.png' className='mx-auto' style={{ height: '122px', width: '122px'}} />
                            <Card.Body>
                                <Card.Title className='text-dark display-5 text-center font-weight-bold'>1 Credit</Card.Title>
                                <Card.Text className='text-dark text-center h4 py-5'> Purchase a quarter barrel AKA Pony Keg</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="light" className='shadow'>
                            <Card.Img variant='top' src='/KegCoins.png' className='mx-auto' style={{ height: '122px', width: '182px'}} />
                            <Card.Body>
                                <Card.Title className='text-dark display-5 text-center font-weight-bold'>2 Credit</Card.Title>
                                <Card.Text className='text-dark text-center h4 py-5'> Purchase a half barrel AKA Full Keg</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>

                <Col lg={6} xs={12} className='d-flex flex-column justify-content-center align-items-center text-dark'>
                    <blockquote className="blockquote text-center">
                        <p className="mb-0 lead">You’re everyone’s favorite member when it’s your turn to buy.</p>
                        <footer className="blockquote-footer"><cite title="Source Title">Rob Crenshaw</cite></footer>
                    </blockquote>
                </Col>
            </Row>
            <Row className='p-5'>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <p className='h3 text-dark pb-3'>A low credit number qualifies you to buy our next keg.</p>
                    <Button 
                        variant='primary' 
                        size='xxl'
                        disabled>
                            View Keg Stats
                    </Button>
                </Col>
            </Row>

        </Container>
    </>
)

export default KegCredits