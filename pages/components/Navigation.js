import Link from 'next/link'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => (
    <>
  <Navbar fixed='top' collapseOnSelect expand="md" variant="dark">
  <Navbar.Brand className='flex-fill justify-content-start' href="/">Island Beer Club</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='justify-content-center'>
    <Link href='/dynamic-scss' passHref>
						<Nav.Link>Dynamic SCSS</Nav.Link>
					</Link>
      <Nav.Link href="#profiles">Profiles</Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav className='flex-fill justify-content-end'>
      <Nav.Link href="#login">Login In</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">Notifications</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
)

export default Navigation
