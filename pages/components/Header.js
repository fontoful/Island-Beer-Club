import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Fade from 'react-bootstrap/Fade'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'

const Header = () => {
  const [open, setOpen] = useState(false)
    return (
  <>
	<Container fluid className='main-header'>
    <Image className='landing-logo' src='/IBCLogo2.png' />
    <h3 className='landing__text'>For Members only</h3>
    <h5>Opt-in here to receive our periodic eGram.</h5>

    <Button
        onClick={() => setOpen(!open)}
        aria-controls="fade-text"
        aria-expanded={open}
        size='lg'
        variant='outline-light'
      >
        Opt-In
      </Button>
      <Fade in={open}>
        <div id="fade-text">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" size='lg' />
            <Form.Text className="text-light">
            We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button
            block
            className='optin___btn' 
            size='lg' 
            type='submit' 
            variant='success'>
          Submit
          </Button>
        </Form>
        </div>
        
      </Fade>
  </Container>
  </>
  )
}

export default Header