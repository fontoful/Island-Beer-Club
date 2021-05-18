import React from 'react'
import { Nav } from 'react-bootstrap'
import LinkElement from './LinkElement'

const Navigation = (props) => (
    <>
      <Nav defaultActiveKey='/'>
        <LinkElement activeClassName='nav-link-active' href='/' passHref>
          <Nav.Link>Home</Nav.Link>
        </LinkElement>
        <LinkElement activeClassName='nav-link-active' href='/history' passHref>
          <Nav.Link>History</Nav.Link>
        </LinkElement>
        <LinkElement activeClassName='nav-link-active' href='/profilesPage' passHref>
          <Nav.Link>Profiles</Nav.Link>
        </LinkElement>
        <LinkElement activeClassName='nav-link-active' href='/foundersDayPage' passHref>
          <Nav.Link>Founders Day</Nav.Link>
        </LinkElement>
        <LinkElement activeClassName='nav-link-active' href='/stats' passHref>
          <Nav.Link>Stats</Nav.Link>
        </LinkElement>
        <LinkElement activeClassName='nav-link-active' href='/styles' passHref>
          <Nav.Link>Styles</Nav.Link>
        </LinkElement>
        <LinkElement activeClassName='nav-link-active' href='/ibus' passHref>
          <Nav.Link>IBU's</Nav.Link>
        </LinkElement>
      </Nav>
    </>
  )

export default Navigation