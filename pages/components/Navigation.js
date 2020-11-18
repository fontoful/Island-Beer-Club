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
    <Link href='/history' passHref>
						<Nav.Link>History</Nav.Link>
					</Link>
      <Nav.Link href="#profiles"><del>Profiles</del></Nav.Link>
      <NavDropdown title={<del>More</del>} id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action"><del>Action</del></NavDropdown.Item>
        <NavDropdown.Item href="#action"><del>Another action</del></NavDropdown.Item>
        <NavDropdown.Item href="#action"><del>Something</del></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"><del>Separated link</del></NavDropdown.Item>
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
