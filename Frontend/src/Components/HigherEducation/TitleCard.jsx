import React from 'react'

import  { useState } from 'react';

const EducationTitle = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={`col-lg-3 col-sm-12 p-3 rounded m-2 border-2 text-center card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h3>{props.title}</h3>
        {isHovered && (
          <p className='description titleDescription'>{props.description}</p>
        )}
      </div>
    </>
  );
};

export default EducationTitle;
