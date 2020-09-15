import Head from 'next/head'
import Link from 'next/link'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
	<>
		<Navbar bg='dark' variant='dark' expand='lg'>
			<Navbar.Brand className='ml-4'>
				<Link href='/'>
					<FontAwesomeIcon size='lg' icon={faBeer} />
				</Link>
				<Navbar.Text className='ml-3'>Island Beer Club</Navbar.Text>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='navbar-nav ml-auto mr-5'>
					<Nav.Link href='/history'>History</Nav.Link>
					<Nav.Link href='/banner-travel'>Banner Travel</Nav.Link>
					<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
						<NavDropdown.Item href='/profiles'>
							Profiles
						</NavDropdown.Item>
						<NavDropdown.Item href='/profiles-form'>
							Profiles Form
						</NavDropdown.Item>
						<NavDropdown.Item href='/stats'>Stats</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='/styles'>
							Styles
						</NavDropdown.Item>
						<NavDropdown.Item href='/ibus'>IBUs</NavDropdown.Item>
						<NavDropdown.Item href='/links'>Links</NavDropdown.Item>
						<NavDropdown.Item href='/pdfs'>PDFs</NavDropdown.Item>
						<NavDropdown.Item href='/fun'>Fun</NavDropdown.Item>
						<NavDropdown.Item href='/contact'>
							Contact
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</>
)

export default Header
