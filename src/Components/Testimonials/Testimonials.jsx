import React, { useRef } from "react";
import "./Testimonials.css";
import nextIcon from "../../assets/next-icon.png";
import backIcon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials" id="testimonials">
      <img
        src={nextIcon}
        className="next-btn"
        alt="Next"
        onClick={slideForward}
      />
      <img
        src={backIcon}
        className="back-btn"
        alt="Back"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} />
                <div>
                  <h3>Joana Martins</h3>
                  <span>Minas Gerais, Brasil</span>
                </div>
              </div>
              <p>
                Minha experiência na UniDev foi transformadora. Aprendi
                habilidades essenciais tanto no desenvolvimento front end quanto
                no back end. O programa de fullstack foi incrível,
                proporcionando uma compreensão abrangente de tecnologias como
                HTML, CSS, JavaScript, Node.js e bancos de dados relacionais e
                não relacionais. Hoje, me sinto confiante para enfrentar
                desafios complexos no mundo do desenvolvimento web, tudo graças
                à educação de qualidade que recebi aqui.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} />
                <div>
                  <h3>João Silva</h3>
                  <span>São Paulo, Brasil</span>
                </div>
              </div>
              <p>
                Estudar na UniDev foi uma das melhores decisões que já tomei. O
                foco no desenvolvimento back end foi excepcional. Aprendi a
                projetar e criar sistemas robustos e escaláveis usando
                linguagens como Python, Java e frameworks como Django e Spring
                Boot. Além disso, tive a oportunidade de explorar conceitos
                avançados de banco de dados e segurança da informação. Estou
                muito grato pela base sólida que adquiri.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} />
                <div>
                  <h3>Paola Fernandes</h3>
                  <span>Lisboa, Portugal</span>
                </div>
              </div>
              <p>
                A UniDev me proporcionou uma jornada emocionante no mundo do
                desenvolvimento front end. Aprendi a traduzir designs criativos
                em interfaces de usuário funcionais e responsivas usando HTML,
                CSS e JavaScript. Além disso, explorei frameworks modernos como
                React e Angular, aprimorando minhas habilidades de
                desenvolvimento web. A educação prática e os projetos
                desafiadores prepararam-me para uma carreira empolgante como
                desenvolvedor front end.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} />
                <div>
                  <h3>Willian Jackson</h3>
                  <span>Santa Catarina, Brasil</span>
                </div>
              </div>
              <p>
                Estudar na UniDev foi uma experiência enriquecedora que mudou
                minha vida. Além de adquirir conhecimentos técnicos sólidos,
                desenvolvi habilidades de resolução de problemas, trabalho em
                equipe e comunicação que são essenciais no mercado de
                tecnologia. Os professores são especialistas em suas áreas e
                estão sempre disponíveis para orientar e apoiar os alunos. Estou
                muito orgulhoso de fazer parte desta comunidade acadêmica e
                ansioso para aplicar o que aprendi para criar um impacto
                positivo no mundo da tecnologia.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
