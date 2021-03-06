import Link from 'next/link'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => (
	<>
		<Navbar
			className='navbar-transparent'
			align='center'
			variant='dark'
			expand='sm'
			sticky='top'
		>
			<Navbar.Brand className='ml-2'>
				<Link href='/'>
					<FontAwesomeIcon
						size='lg'
						className='main-icon'
						icon={faBeer}
					/>
				</Link>
				<Navbar.Text className='ml-2'>
					<Link href='/'>Island Beer Club</Link>
				</Navbar.Text>
			</Navbar.Brand>

			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto'>
					<Link href='/history'>
						<Nav.Link href='/history'>History</Nav.Link>
					</Link>
					<Link href='/banner-travel'>
						<Nav.Link href='/banner-travel'>Banner Travel</Nav.Link>
					</Link>
					<Link href='/profiles'>
						<Nav.Link href='/profiles'>Profiles</Nav.Link>
					</Link>
					<Link href='/sign-in'>
						<Nav.Link href='/sign-in'>Sign In</Nav.Link>
					</Link>
					<NavDropdown
						alignRight
						title='More'
						id='basic-nav-dropdown'
					>
						<Link href='profiles-form'>
							<NavDropdown.Item href='/profiles'>
								Profiles Form
							</NavDropdown.Item>
						</Link>
						<Link href='/stats'>
							<NavDropdown.Item href='/stats'>
								Stats
							</NavDropdown.Item>
						</Link>
						<NavDropdown.Divider />
						<Link href='/founders-day'>
							<NavDropdown.Item href='/founders-day'>
								Founders Day
							</NavDropdown.Item>
						</Link>
						<Link href='/style'>
							<NavDropdown.Item href='/style'>
								Styles
							</NavDropdown.Item>
						</Link>
						<Link href='/ibus'>
							<NavDropdown.Item href='/ibus'>
								IBUs
							</NavDropdown.Item>
						</Link>
						<Link href='/links'>
							<NavDropdown.Item href='/links'>
								Links
							</NavDropdown.Item>
						</Link>
						<Link href='/pdfs'>
							<NavDropdown.Item href='/pdfs'>
								PDFs
							</NavDropdown.Item>
						</Link>
						<Link href='/fun'>
							<NavDropdown.Item href='/fun'>Fun</NavDropdown.Item>
						</Link>
						<Link href='/contact'>
							<NavDropdown.Item href='/contact'>
								Contact
							</NavDropdown.Item>
						</Link>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</>
)

export default Navigation
