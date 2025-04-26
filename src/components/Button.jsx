import React from 'react'

const Button = ({ className, id , text}) => {
  return (
    <a className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/public/images/arrow-down.svg" alt="down-arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button