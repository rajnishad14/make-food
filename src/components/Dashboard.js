import React from 'react'
import main from '../assets/main4.jpg'

const Dashboard = () => {
  return (
    <div>
      <main className="page">
        <header className="hero">
          <img src={main} alt="no img" className="hero-img" />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Make Food</h1>
              <h4>Learn Making Food</h4>
            </div>
          </div>
        </header>
      </main>
    </div>
  )
}

export default Dashboard
