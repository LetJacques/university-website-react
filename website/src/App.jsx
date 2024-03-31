import React, { useState } from "react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Home />
      <Title subTitle="Nossos cursos" title="Escolha sua carreira" />
      <Programs />
      <About setPlayState={setPlayState} />
      <Title subTitle="Galeria" title="Fotos do campus" />
      <Campus />
      <Title subTitle="Depoimentos" title="O que os alunos dizem" />
      <div className="container">
        <Testimonials />
        <Title subTitle="Contato" title="Fale conosco!" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
