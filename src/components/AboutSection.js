import React from 'react';
import home1 from '../img/home1.png'
const AboutSection = () => {
  return (
    <div>
      <div className='description'>
        <div className='title'>
          <div className='hide'>
            <h2>We work to make</h2>
          </div>
          <div className='hide'>
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className='hide'>
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          officiis possimus error voluptatibus esse sapiente odit veritatis cum
          id aliquam est sit omnis fugit at, hic voluptatem! Veniam, minima
          sapiente.
        </p>
        <button>Contact us</button>
      </div>
      <img src={home1} alt="cameraman"/>
    </div>
  );
};

export default AboutSection;
