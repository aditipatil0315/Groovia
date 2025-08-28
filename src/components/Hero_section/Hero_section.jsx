import React from 'react'
import './Hero_section.css'

const Hero_section = () => {
  return (
    <div className='Hero_section'>
        <div className="hero_center">
            <div className="left">
                <h1>“Step Back in Style. <br /> 
Retro fashion reimagined for today.”</h1>
                <p>From dance floors of the 70s to neon streets of the 80s — your new wardrobe is a time machine. Are you ready to groove?”</p>
                <button>Explore Collection</button>

            </div>
            <div className="right">
                {/* <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" /> */}

            </div>
        </div>
    </div>
  )
}

export default Hero_section