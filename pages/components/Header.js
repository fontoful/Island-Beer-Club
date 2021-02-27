import React from 'react';
import { useState } from 'react'
import { Jumbotron, Button, Fade, Form } from 'react-bootstrap';

const Header = (props) => {
    const [open, setOpen] = useState(false)
    return (
      <Jumbotron fluid 
        style={{
          background: `radial-gradient(${props.radialGradient}), url(${props.backgroundImage})`, 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center 78px',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          height: props.height,
        }} 
        className='d-flex flex-column justify-content-center align-items-center text-light p-2'
      >
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
            <Form.Text className="text-light h5 mt-2">
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
            </Jumbotron>
        )
    }

    Header.defaultProps = {
        title: 'Island Beer Club'
    }

export default Header;