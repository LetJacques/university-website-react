import React from "react";
import "./About.css";
import aboutImg from "../../assets/about.png";
import playIcon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div
      className="about d-flex align-items-center justify-content-between px-5"
      id="about"
    >
      <div className="about-left">
        <img src={aboutImg} className="w-100 rounded" />
        <img
          src={playIcon}
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3 className="fw-semibold fs-5 text-uppercase">sobre a unidev</h3>
        <h2 className="fs-2 fw-bold text-capitalize mb-4">
          Criando hoje <br />
          os líderes de amanhã.
        </h2>
        <p>
          Seja parte de uma jornada transformadora na nossa Universidade, onde a
          inovação e o conhecimento se encontram para moldar os líderes do
          amanhã. Aqui, oferecemos uma experiência educacional incomparável, com
          cursos abrangentes em desenvolvimento fullstack, front end e back end,
          capacitando os estudantes com as habilidades essenciais para prosperar
          na indústria tecnológica em constante evolução.
        </p>
        <p>
          Nossa missão vai além do ensino tradicional, buscando inspirar a
          excelência e promover a inovação em todos os aspectos. Com professores
          especializados e recursos de ponta, proporcionamos um ambiente
          estimulante que desafia os limites do aprendizado.
        </p>
        <p>
          Na nossa universidade, os valores de excelência acadêmica, colaboração
          e ética são cultivados em cada aluno, preparando-os não apenas para
          uma carreira de sucesso, mas também para fazerem uma diferença
          positiva no mundo. Junte-se a nós e seja o protagonista da sua jornada
          rumo ao sucesso.
        </p>
      </div>
    </div>
  );
};

export default About;
