import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/01-React_Intro">UseContext</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              to="/Login"
            >
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}
