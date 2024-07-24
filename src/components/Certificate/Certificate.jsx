import React from 'react';
import './Certificate.css';
import { useInView } from 'react-intersection-observer';

import Certificates from './Certificate.jpeg';

export default function Certificate() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value to trigger the animation earlier or later
  });
  return (
    <>
    <div className={`certificate ${inView ? 'animate' : ''}`} ref={ref}>
      <div className="main-cercard">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="cercards">
            <div className="card-inner">
              <div className="card-content">
                <img src={Certificates} alt="Certificate" className="cercard-img" />
              </div>
              <div className="card-back">
                <div>
                  <h4>Certificate Name</h4>
                  <h4>Grade : 78%</h4></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
