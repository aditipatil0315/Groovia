import React from 'react'
import './Hero_section.css'
import img1 from '../../assets/img1.png'

const Hero_section = () => {
  const scrollToCollection = () => {
    const section = document.getElementById("collection-section");
    section.scrollIntoView({ behavior: "smooth" }); // auto scroll
  };

  return (
    <div className='Hero_section'>
      <div className="hero_center">
        <div className="left">
          <h1>“Step Back in Style. <br /> 
          Retro fashion reimagined for today.”</h1>
          <p>
            From dance floors of the 70s to neon streets of the 80s — 
            your new wardrobe is a time machine. Are you ready to groove?
          </p>
          <button className='button' onClick={scrollToCollection}>
            Explore Collection
          </button>
        </div>
        <div className="right">
          <img src={img1} alt="Fashion" />
        </div>
      </div>
    </div>
  )
}

export default Hero_section
