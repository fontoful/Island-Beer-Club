import ActiveLink from './ActiveLink'

const Nav = ({className}) => (
  <nav className={className}>
    <style jsx>{`
      .nav-link {
        color: #F5F5F5;
      }
      .nav-link:hover {
        background: none;
        color: #DEDEDE;
      }
    `}</style>
    <ul className="nav">
      <li>
        <ActiveLink activeClassName="active" href="/layoutExample">
          <a className="nav-link">Home</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/history">
          <a className="nav-link">History</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/profiles">
          <a className="nav-link">Profiles</a>
        </ActiveLink>
      </li>
     <li>
        <ActiveLink activeClassName="active" href="/foundersDay">
          <a className="nav-link">Founders Day</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/stats">
          <a className="nav-link">Stats</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/styles">
          <a className="nav-link">Styles</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/ibus">
          <a className="nav-link">IBU's</a>
        </ActiveLink>
      </li>
    </ul>
  </nav>
)

export default Nav
