import { useRouter } from 'next/router'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import LinkElement from './LinkElement'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell , faUser } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => (
    <>
  <Navbar fixed='top' collapseOnSelect expand='md' variant='dark' className='d-flex justify-content-between'>
  <Navbar.Brand href='/'>
      <img
        src='/IBCLogo2.png'
        width='125'
        height='60'
        className='d-inline-block align-top'
        alt='React Bootstrap logo'
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls='responsive-navbar-nav' />
  <Navbar.Collapse id='responsive-navbar-nav'>
    <Nav 
      className='d-flex flex-grow-1 justify-content-center'
      >
    <LinkElement activeClassName='nav-link-active' href='/' passHref>
						<Nav.Link>Home</Nav.Link>
			</LinkElement>
      <LinkElement activeClassName='nav-link-active' href='/history' passHref>
						<Nav.Link>History</Nav.Link>
			</LinkElement>
      <LinkElement activeClassName='nav-link-active' href='/profiles' passHref>
        <Nav.Link>Profiles</Nav.Link>
      </LinkElement>
      <LinkElement activeClassName='nav-link-active' href='/foundersDayPage' passHref>
        <Nav.Link>Founders Day</Nav.Link>
      </LinkElement>
      <NavDropdown title='More' id='collasible-nav-dropdown'>
        <LinkElement activeClassName='nav-link-active' href='/memberRegistration' passHref>
          <NavDropdown.Item>Member Registration</NavDropdown.Item>
        </LinkElement>
        <LinkElement activeClassName='nav-link-active' href='/stats' passHref>
          <NavDropdown.Item>Stats</NavDropdown.Item>
        </LinkElement>
        <LinkElement activeClassName='nav-link-active' href='/beerStyles' passHref>
          <NavDropdown.Item>Styles</NavDropdown.Item>
        </LinkElement>
        <LinkElement activeClassName='nav-link-active' href='/ibus' passHref>
          <NavDropdown.Item>IBU's</NavDropdown.Item>
        </LinkElement>
      </NavDropdown>
    </Nav>
    <Nav className='flex-shrink justify-content-end'>
      <LinkElement activeClassName='nav-link-active' href='#' passHref>
        <Nav.Link className='mx-1'><FontAwesomeIcon icon={faUser} /></Nav.Link>
      </LinkElement>
      <LinkElement activeClassName='nav-link-active' href='#' passHref>
        <Nav.Link className='mx-1'><FontAwesomeIcon icon={faBell} /></Nav.Link>
      </LinkElement>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
  )
export default Navigation
