import React from "react";
import Arrow from './assets/arrow-right.svg'

function BoutonSpikes() {
    const handleClick = () => {

      window.open("https://spikes.com", "_blank");
    };
  
    return (
      <button className="buttonspikes" onClick={handleClick}>www.spikes.com <img src={Arrow}/></button>
    );
  }
  
  export default BoutonSpikes;
  