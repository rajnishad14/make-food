import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Make Food</span>. Built with{' '}
        <a href="https://reactjs.org/">React</a>
      </p>
    </footer>
  )
}

export default Footer
