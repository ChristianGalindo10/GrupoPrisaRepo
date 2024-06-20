import React from 'react';
import './iconSlider.css';

const IconSlider = ({ icons }) => {
  return (
    <div className="icon-slider">
      <div className="icon-track">
        {icons.map((icon, index) => (
          <div key={index} className="icon-item">
            <img src={icon.src} alt={icon.alt} />
          </div>
        ))}
        {icons.map((icon, index) => (
          <div key={index + icons.length} className="icon-item">
            <img src={icon.src} alt={icon.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconSlider;