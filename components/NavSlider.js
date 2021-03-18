import React, { useState }  from 'react'
import Modal from 'react-modal'
import LinkElement from './LinkElement'
import Navigation from './Navigation'
import Notifications from './Notifications'
import { Accordion, Button, Col, Nav, Image, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'

const NavSlider = (props) => {
  
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false);
  }
  return (
    <>
      <div
        className='d-flex my-0 py-0 d-flex'
      >
        <Col xs={3} className='d-flex align-items-stretch'>
          <Button
            variant='link'
            className='text-light p-0'
            onClick={openModal}
          >
            <FontAwesomeIcon icon={faBars} width='22' />
          </Button>
        </Col>
        <Col xs={6} className='d-flex justify-content-center'>
        <Image fluid src='/IBCLogo2.png' style={{ height: '60px' }} className='m-2' />
      </Col>
      <Col xs={3}>
      </Col>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='d-flex flex-column navSlider'
        contentLabel="IBC Navigation"
        ariaHideApp={false}
      >
        <Row className='w-100 m-0 navbar'>
          <Col 
            className='d-flex justify-content-between align-items-center text-light'
            style={{ height: '60px' }}
          >
            <h4 className='pl-2'>Island Beer Club</h4>
            <Button
              variant='link'
              className='text-light'
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faTimes} width='22' />
            </Button>
          </Col>
        </Row>

        <Row className='m-0'>
          <Col className='p-0'>
            <Navigation />
          </Col>
        </Row>
      
        <Row className='d-flex flex-column flex-grow-1 notificationData mx-0'>
          <Col className='d-flex flex-grow-0 justify-content-center align-items-center px-0'>
            <Accordion className='w-100'>
              <Accordion.Toggle 
                as='div' 
                variant="link" 
                eventKey="0" 
                className='d-flex align-items-center justify-content-center border-top border-bottom p-2 mb-2 sticky-top'
                style={{backgroundColor: '#fafafa'}}
                >
                <FontAwesomeIcon icon={faBell} width='22' className='mr-3' /> 
                Notifications
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <div>
                  <Notifications />
                </div>
              </Accordion.Collapse>
            </Accordion>
          </Col>
        </Row>

        <Row className='d-flex flex-end w-100 py-0 m-0 bg-dark text-light'>
          <Col className='d-flex align-items-center justify-content-center border-top'>
            <FontAwesomeIcon icon={faUser} width='22' />
            <LinkElement activeClassName='nav-link-active' href='/sign-in' passHref>
              <Nav.Link className='text-light'>Login</Nav.Link>
            </LinkElement>
          </Col>
        </Row>
      </Modal>
    </>
  )
}

export default NavSlider