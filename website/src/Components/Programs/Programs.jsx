import React from "react";
import "./Programs.css";
import program1 from "../../assets/program-1.svg";
import program2 from "../../assets/program-2.svg";
import program3 from "../../assets/program-3.svg";
import programIcon1 from "../../assets/program-icon-1.png";
import programIcon2 from "../../assets/program-icon-2.png";
import programIcon3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-between programs px-5"
      id="programs"
    >
      <div className="program">
        <img src={program1} />
        <div className="caption">
          <img src={programIcon1} />
          <p>Desenvolvimento Full Stack</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} />
        <div className="caption">
          <img src={programIcon2} />
          <p>Desenvolvimento Front End</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} />
        <div className="caption">
          <img src={programIcon3} />
          <p>Desenvolvimento Back End</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
