import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Intro = () => (
    <>
    <Container fluid className='py-5 px-5'>
        <Row>
          <Col>
            <h1 className='display-4 text-center pt-5'>Remember, RULE #1: There ARE no rules</h1>
            <p className='h4 text-center'><strong>How does one become a member?</strong>{' '}Buy a keg of hand-crafted beer.</p>
          </Col>
        </Row>
        <Row className='pt-5'>
            <Col className='d-flex flex-column py-5'>
                <div className='d-flex align-self-center'>
                    <FontAwesomeIcon icon={faBeer} size="6x" />
                </div>
                <div className='pt-2' style={{fontSize: 16}}>
                    <p> We are a bunch of guys who grew up together and love beer. We've all gone off to school, have had successful careers and, in our later life, returned to our home town to reunite and share experiences. We're posting this site to communicate and coordinate with our numerous members worldwide and with potential members wherever they may be. This is for our amusement and entertainment. If you like it please return.</p>
                </div>
            </Col>
            <Col className='d-flex flex-column py-5'>
                <div className='d-flex align-self-center'>
                    <FontAwesomeIcon icon={faUserFriends} size="6x" />
                </div>
                <div className='pt-2' style={{fontSize: 16}}>
                    <p>The IBC is a focal point of merriment and community outreach. The IBC meets every Wednesday from 4 PM to 6 PM (Standard Time); 4:30 PM to 6:30 PM (Daylight Savings Time) in the alley (Beer Belly Blvd) on J Avenue in Coronado. Guests, especially ladies, are always welcome when accompanied by a Beer Club member. Please join us.</p>
                </div>
            </Col>
      </Row>
      </Container>
      </>
)

export default Intro