import React from "react";

const Card = ({ imgsrc, name, comment, at }) => {
  return (
    <div className="card">
      <div className="partie-sup">
        <div className="partie-left">        
            <img src={imgsrc} alt={name} />
        </div>
        <div className="partie-right">
            <div>{name}</div>      
            <span>{at}</span>
        </div>
      </div>
      <div className="partie-inf">      
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Card;