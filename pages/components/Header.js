import { useState } from 'react'
import { Jumbotron } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Fade from 'react-bootstrap/Fade'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'

const Header = () => {
  const [open, setOpen] = useState(false)
    return (
  <>
	<Jumbotron fluid className='w-100 d-flex flex-column align-items-center justify-content-center main-header'>

    <p className='display-4'>For Members only</p>
    <h3>Opt-in here to receive our periodic eGram.</h3>


    <Button
        onClick={() => setOpen(!open)}
        className='m-3'
        aria-controls="fade-text"
        aria-expanded={open}
        size='lg'
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
            variant='success'>
          Submit
          </Button>
        </Form>
      </Fade>
  </Jumbotron>
  </>
  )
}

export default Header