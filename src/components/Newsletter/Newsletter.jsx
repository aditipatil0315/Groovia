import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      {/* Left Image */}
      <div className="side_text">
        <h3 className='flicker-text'>70s</h3>
      </div>

      {/* Main Content */}
      <div className="newsletter-content">
        <h2> Don’t Miss the Beat </h2>
        <p>
          Our drops sell out faster than a disco dance floor on Saturday night. 
          Subscribe now to unlock early access, groovy giveaways, 
          and fashion that turns heads.
        </p>

        <form className="newsletter-form">
          <input 
            type="email" 
            placeholder="Enter your email" 
            required 
          />
          <button className='button' type="submit">Subscribe</button>
        </form>
      </div>

      {/* Right Image */}
      <div className="side_text">
        <h3 className='flicker-text'>80s</h3>
      </div>
    </section>
  );
};

export default Newsletter;
