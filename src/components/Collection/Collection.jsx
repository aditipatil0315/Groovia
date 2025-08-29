import React from 'react'
import './Collection.css'
import one from '../../assets/one.jpg'
import two from '../../assets/two.jpg'  
import three from '../../assets/three.jpg'
import four from '../../assets/four.jpg'

const Collection = () => {
  return (
    <div className='collection'>
       {/* Top Text */}
      <div className="collection-header">
        <h2>Collection 2025</h2>
        <p>
          From Saturday night fever to 80s street style, we’ve got the gear to transform sidewalks 
          into runways. Shop the collection, step into the groove, and own the spotlight.
        </p>
      </div>

      {/* Cards Row */}
      <div className="collection-cards">
        <div className="card">
          <img src={one} alt="Bell-Bottom Jeans" />
          <h3>Bell-Bottom Jeans</h3>
        </div>
        <div className="card">
          <img src={four} alt="Oversized Sunglasses" />
          <h3>Oversized Sunglasses</h3>
        </div>
        <div className="card">
          <img src={two} alt="Retro Sneakers" />
          <h3>Retro Sneakers</h3>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="collection-footer">
        <p>
          Our collection revives statement pieces of the past: flare jeans that move with rhythm, 
          bold jackets that echo disco nights, and sneakers straight out of 80s street culture. 
          Every design channels nostalgia, yet feels perfectly at home today.
        </p>
      </div>
      
    </div>
  )
}

export default Collection