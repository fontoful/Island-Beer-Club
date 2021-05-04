import React from 'react';
import { useState } from 'react'
import { Row, Col, Jumbotron, Button, Fade, Form, Container } from 'react-bootstrap';

const Header = (props) => {
  const [open, setOpen] = useState(false)
  return (
    <Row
      style={{
        background: `radial-gradient(${props.radialGradient}), url(${props.backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 78px',
        backgroundAttachment: 'fixed',
        minHeight: '400px',
        padding: '0px'
      }}
    >
      <Col className='d-flex flex-column justify-content-center align-items-center text-light mt-4 pt-4'>
        <p className='h3 text-center'>{props.title}</p>
        <p>{props.subtitle}</p>
        <Button
          onClick={() => setOpen(!open)}
          className='m-3'
          aria-controls="fade-text"
          aria-expanded={open}
          size='md'
          variant='outline-light'
        >
          Opt-In
      </Button>
        <Fade in={open}>
          <Form>
            <Form.Group controlId="optinEmail">
              <Form.Control type="email" placeholder="Enter email" size='md' />
              <Form.Text className="text-light mt-2 text-center">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>
            <Button
              block
              size='md'
              type='submit'
              variant='outline-light'
            >
              Submit
          </Button>
          </Form>
        </Fade>
      </Col>
    </Row>
  )
}

Header.defaultProps = {
  title: 'Island Beer Club'
}

export default Header;