import React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const KegCredits = () => (
    <>
        <Container fluid className='d-flex flex-column justify-content-center py-4'>

            <Row className='py-2'>
                <Col>
                    <p className='display-4 text-center'>Keg Credits</p>
                </Col>
            </Row>

            <Row>
                <Col lg={6} xs={12} >
                    <CardGroup className='d-flex justify-content-center align-items-stretch flex-wrap'>
                        <Card border='light' className='m-2 shadow' style={{ maxWidth: '300px' }}>
                            <Card.Img variant='top' src='/kegCoin.png' className='my-2 mx-auto' style={{ height: '122px', width: '122px'}} />
                            <Card.Body>
                                <Card.Title className='text-dark text-center'>1 Credit</Card.Title>
                                <Card.Text className='text-dark text-center '> Purchase a quarter barrel AKA Pony Keg</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border='light' className='m-2 shadow' style={{ maxWidth: '300px' }}>
                            <Card.Img variant='top' src='/KegCoins.png' className='my-2 mx-auto' style={{ height: '122px', width: '182px'}} />
                            <Card.Body>
                                <Card.Title className='text-dark text-center'>2 Credits</Card.Title>
                                <Card.Text className='text-dark text-center '> Purchase a half barrel AKA Full Keg</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
                <Col lg={6} xs={12} className='d-flex justify-content-center align-items-center text-dark'>
                    <blockquote className='blockquote text-center'>
                        <p>You’re everyone’s favorite member when it’s your turn to buy.</p>
                        <footer className='blockquote-footer d-flex justify-content-end mt-3 mr-3'><cite title='Source Title'>Rob Crenshaw</cite></footer>
                    </blockquote>
                </Col>
            </Row>
            <Row className='pt-4'>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <p className='h3 text-dark pb-3'>A low credit number qualifies you to buy our next keg.</p>
                    <Button 
                        href='/stats'
                        variant='primary' 
                        size='lg'
                        >
                        View Keg Stats
                    </Button>
                </Col>
            </Row>

        </Container>
    </>
)

export default KegCredits