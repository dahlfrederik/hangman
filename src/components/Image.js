import React from "react";

import darthVader from "../img/darthvader_nobackground.png";
import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";

const Image = ({ wrongLetters }) => {
  const errors = wrongLetters.length;

  const styleObject = {
    maxWidth: "100%",
  };

  return (
    <div>
      {errors === 0 && (
        <img src={darthVader} alt="darthvader" style={styleObject}></img>
      )}
      {errors > 0 && errors < 2 && (
        <img src={img1} alt="clone1" style={styleObject}></img>
      )}
      {errors > 1 && errors < 3 && (
        <img src={img2} alt="clone2" style={styleObject}></img>
      )}
      {errors > 2 && errors < 4 && (
        <img src={img3} alt="clone3" style={styleObject}></img>
      )}
      {errors > 3 && errors < 5 && (
        <img src={img4} alt="clone4" style={styleObject}></img>
      )}
      {errors > 4 && errors < 6 && (
        <img src={img5} alt="clone5" style={styleObject}></img>
      )}
      {errors > 5 && errors < 7 && (
        <img src={img6} alt="clone6" style={styleObject}></img>
      )}
    </div>
  );
};

export default Image;
