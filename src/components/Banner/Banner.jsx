import React, { useEffect } from "react";
import gsap from "gsap";
import "./Banner.css";

const Banner = () => {
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        // Scroll down → move left
        gsap.to(".banner_text", {
          x: "-200%",
          duration: 10,
          repeat: -1,
          ease: "easeInOut",
        });
      } else {
        // Scroll up → reset position
        gsap.to(".banner_text", {
          x: "0%",
          duration: 10,
          repeat: -1,
          ease: "easeInOut",
        });
      }
    };

    window.addEventListener("wheel", handleWheel);

    // cleanup on unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="banner">
      <div className="banner_track">
        
        <div className="banner_text">
          <p>We blend vintage vibes with modern fits. Inspired by the 70s–80s, made for today. ⇱</p>
        </div>
        <div className="banner_text">
          <p>We blend vintage vibes with modern fits. Inspired by the 70s–80s, made for today. ⇱</p>
        </div>
        <div className="banner_text">
          <p>We blend vintage vibes with modern fits. Inspired by the 70s–80s, made for today. ⇱</p>
        </div>
    
      </div>
    </div>
  );
};

export default Banner;

