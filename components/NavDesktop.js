import Nav from 'react-bootstrap/Nav'
import Navigation from './Navigation'
import Navbar from 'react-bootstrap/Navbar'
import LinkElement from './LinkElement'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'

const NavDesktop = (props) => {

  return (
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
          <Navigation />
        <Nav className='flex-shrink justify-content-end'>
          <LinkElement activeClassName='nav-link-active' href='http://localhost:3001/' passHref>
            <Nav.Link className='mx-1'><FontAwesomeIcon icon={faUser} /></Nav.Link>
          </LinkElement>
          <LinkElement activeClassName='nav-link-active' href='#' passHref>
            <Nav.Link className='mx-1'><FontAwesomeIcon icon={faBell} /></Nav.Link>
          </LinkElement>
        </Nav>
      </Navbar>
    </>
  )
}
export default NavDesktop
