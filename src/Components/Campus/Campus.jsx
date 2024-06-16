import React from "react";
import "./Campus.css";
import gallery1 from "../../assets/gallery-1.png";
import gallery2 from "../../assets/gallery-2.png";
import gallery3 from "../../assets/gallery-3.svg";
import gallery4 from "../../assets/gallery-4.svg";
import whiteArrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="campus text-align-center px-5" id="campus">
      <div className="gallery d-flex align-items-center justify-content-between mb-4">
        <img src={gallery1} alt="Gallery 1" />
        <img src={gallery2} alt="Gallery 2" />
        <img src={gallery3} alt="Gallery 3" />
        <img src={gallery4} alt="Gallery 4" />
      </div>
      <div className="d-flex justify-content-center pt-5">
        <button className="btn btn-primary rounded-pill border-none py-2 px-4 align-items-center">
          Veja mais aqui
          <img
            className="ms-2 py-2"
            src={whiteArrow}
            alt="White Arrow"
            style={{ width: "20px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Campus;
