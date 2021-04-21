import React from 'react'
import { Link } from 'react-router-dom'
import aboutimg from '../assets/aboutPage2.jpg'

const About = () => {
  return (
    <main className="page">
      <section className="about-page">
        <article>
          <h2>This is a recipes site where you can learn make awesome food</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            sunt mollitia beatae accusamus nulla, quibusdam cupiditate quos
            corrupti dolorem vitae?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus.
          </p>
          <Link to="/contact" className="btn">
            contact
          </Link>
        </article>
        <img
          src={aboutimg}
          alt="Person Pouring Salt in Bowl"
          className="about-img"
        />
      </section>
      {/* <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section> */}
    </main>
  )
}

export default About
