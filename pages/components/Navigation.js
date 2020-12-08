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
    <Link href='/' passHref>
						<Nav.Link>Home</Nav.Link>
			</Link>
      <Link href='/history' passHref>
						<Nav.Link>History</Nav.Link>
			</Link>
      <Link href='/profiles' passHref>
        <Nav.Link>Profiles</Nav.Link>
      </Link>
      <Link href='/foundersDayPage' passHref>
        <Nav.Link>Founders Day</Nav.Link>
      </Link>
      <NavDropdown title={<del>More</del>} id="collasible-nav-dropdown">
        <Link href="/memberRegistration" passHref>
          <NavDropdown.Item>Member Registration</NavDropdown.Item>
        </Link>
      </NavDropdown>
    </Nav>
    <Nav className='flex-fill justify-content-end'>
      <Nav.Link href="#login"><del>Login In</del></Nav.Link>
      <Nav.Link eventKey={2} href="#memes"><del>Notifications</del></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
)

export default Navigation
