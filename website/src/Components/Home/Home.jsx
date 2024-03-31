import React from "react";
import "./Home.css";
import darkArrow from "../../assets/dark-arrow.png";

const Home = () => {
  return (
    <div
      className="home w-100 d-flex align-items-center justify-content-center text-center"
      id="home"
    >
      <div className="home-text">
        <h1 className="fw-semibold">
          Universidade de Tecnologia para Desenvolvedores
        </h1>
        <p>
          Somos uma instituição focada em capacitar desenvolvedores com
          habilidades práticas para prosperar na indústria tecnológica.
          Oferecemos programas abrangentes ministrados por especialistas,
          preparando os alunos para se destacarem no ramo. Nosso objetivo é
          inspirar a excelência e promover a inovação para formar líderes na
          área de tecnologia.
        </p>
        <button className="btn btn-light rounded-pill border-none d-inline-flex align-items-center justify-content-center py-3 px-4">
          Saiba mais
          <img className="ms-2" src={darkArrow} style={{ width: "20px" }} />
        </button>
      </div>
    </div>
  );
};

export default Home;
