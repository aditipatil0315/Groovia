import React from 'react'
import './Why_us.css'
import a from '../../assets/a.jpg'
import b from '../../assets/b.jpg'  
import c from '../../assets/c.jpg'
import d from '../../assets/d.jpg'
import e from '../../assets/e.jpg'

const Why_us = () => {
  return (
    <div className='why_us'>
        <div className="text_why">
            <h1>Unlike fast fashion, we design with purpose: <span>reviving iconic styles</span>, using quality fabrics, and creating timeless pieces that never go out of groove. With us, your wardrobe is a <span>mix of history</span>, artistry, and individuality.</h1>
        </div>
        <div className="images">
            
            <div className="img">
                <img src={d} alt="" />
            </div>
            <div className="img">
                 <img src={b} alt="" />
            </div>
            <div className="img">
                <img src={c} alt="" />

            </div>

        </div>
    </div>
  )
}

export default Why_us