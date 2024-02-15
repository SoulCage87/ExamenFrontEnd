import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <>
<nav className="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link to ="" className="navbar-brand">WikiNajes</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to = "/" className="nav-link" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-link">Suscribete</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
  )
}

export default Navbar
