import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Intro = () => (
    <>
    <Container fluid>
        <Row className='bg-warning py-3'>
          <Col>
            <h2 className='text-center'>Remember, RULE #1: There ARE no rules</h2>
            <p className='text-center'><strong>How does one become a member?</strong>{' '}Buy a keg of hand-crafted beer.</p>
          </Col>
        </Row>
        <Row className='pt-2'>
            <Col lg={6} xs={12} className='d-flex flex-column align-items-center py-5'>
                <FontAwesomeIcon icon={faBeer} size="6x" />
                <p> We are a bunch of guys who grew up together and love beer. We've all gone off to school, have had successful careers and, in our later life, returned to our home town to reunite and share experiences. We're posting this site to communicate and coordinate with our numerous members worldwide and with potential members wherever they may be. This is for our amusement and entertainment. If you like it please return.</p>
            </Col>
            <Col lg={6} xs={12} className='d-flex flex-column align-items-center py-5'>
                <FontAwesomeIcon icon={faUserFriends} size="6x" />
                <p>The IBC is a focal point of merriment and community outreach. The IBC meets every Wednesday from 4 PM to 6 PM (Standard Time); 4:30 PM to 6:30 PM (Daylight Savings Time) in the alley (Beer Belly Blvd) on J Avenue in Coronado. Guests, especially ladies, are always welcome when accompanied by a Beer Club member. Please join us.</p>
            </Col>
      </Row>
      </Container>
      </>
)

export default Intro