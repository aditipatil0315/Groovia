import React from 'react'
import './About_us.css'

const About_us = () => {
  return (
    <div className='about_us'>
      <div className="upper">
        <h1>About Us</h1>
        <p>we are inspired by <br />the spirit of</p>

      </div>
      <div className="middle">
        <p>70s-80s</p>
      </div>
      <div className="lower">
        <span>We blend vintage vibes with modern fits. Inspired by the 70s–80s, made for today</span>
        <div className="lower_right">
          <div className="one">
            <p>Our brand is about making fashion fun again — groovy looks, funky colors, and outfits that never go out of style.</p>
            <br />
            <p>Not just clothes — a celebration of the 70s & 80s. Wear nostalgia, styled for today.</p>

          </div>
          <div className="two">
            <p>We believe in quality, comfort, and a dash of retro flair. Our pieces are designed to make you feel good and look great.</p>
            <br />
            <p>Join us on this stylish journey back in time, with a modern twist. Because fashion should be fun, expressive, and timeless.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About_us