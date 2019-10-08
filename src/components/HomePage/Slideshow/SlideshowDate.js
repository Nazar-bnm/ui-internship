import React from 'react';
import girlInOveralls from '../../../assets/img/background/girl-in-overalls.jpg';
import girlOnBoat from '../../../assets/img/background/girl-on-boat.jpg';
import girls from '../../../assets/img/background/girls.jpg';
import manInCoat from '../../../assets/img/background/men-in-coat.jpg';

export const slideData = [
  {
    id: 1,
    img: girlInOveralls,
    component: (
      <div>
        <h1 className="slide-info-title ">new collection</h1>
        <p className="slide-info-description">Special autumn edition</p>
        <button className="slide-info-button">
          discover the editorial
        </button>
      </div>
    ),
  },
  {
    id: 2,
    img: girlOnBoat,
    component: (
      <div>
        <h1 className="slide-info-title ">new collection</h1>
        <p className="slide-info-description">a long journey</p>
        <button className="slide-info-button">
          find a perfect outfit
        </button>
      </div>
    ),
  },
  {
    id: 3,
    img: girls,
    component: (
      <div>
        <h1 className="slide-info-title ">sales</h1>
        <p className="slide-info-description">want a new look ?</p>
        <button className="slide-info-button">
          start shopping now
        </button>
      </div>
    ),
  },
  {
    id: 4,
    img: manInCoat,
    component: (
      <div>
        <h1 className="slide-info-title ">new collection</h1>
        <p className="slide-info-description">a new wave</p>
        <button className="slide-info-button">
        find a perfect outfit
        </button>
      </div>
    ),
  },
];
