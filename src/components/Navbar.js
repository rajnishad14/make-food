import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className={show ? 'nav-links show-links' : 'nav-links'}>
          <Link
            to="/"
            className="nav-link"
            onClick={() => {
              setShow(true)
            }}
          >
            home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            onClick={() => {
              setShow(true)
            }}
          >
            recipes
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            onClick={() => {
              setShow(true)
            }}
          >
            tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => {
              setShow(true)
            }}
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
