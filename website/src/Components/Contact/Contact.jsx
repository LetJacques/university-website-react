import React, { useEffect, useRef } from "react";
import "./Contact.css";
import msgIcon from "../../assets/msg-icon.png";
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";
import Inputmask from "inputmask";

const Contact = () => {
  const phoneInputRef = useRef(null);

  useEffect(() => {
    Inputmask({ mask: "(99)9999-9999" }).mask(phoneInputRef.current);
  }, []);

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3cc2e9e1-aa6a-4bae-a197-3d3a90f75a99");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message was sent successfully!");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div
      className="contact d-flex align-content-center justify-content-between"
      id="contact"
    >
      <div className="contact-col">
        <h3>
          Nos envie uma mensagem
          <img
            className="ms-3"
            src={msgIcon}
            style={{ width: "35px" }}
            alt="Message Icon"
          />
        </h3>
        <p>
          Na UniDev, você encontra programas atualizados, instrutores
          experientes e uma comunidade engajada. Transforme sua paixão pela
          tecnologia em uma carreira de sucesso. Entre em contato hoje mesmo e
          descubra como podemos ajudá-lo a alcançar seus objetivos
          profissionais!
        </p>
        <ul className="m-0 p-0">
          <li>
            <img src={mailIcon} alt="Mail Icon" />
            unidev@email.com
          </li>
          <li>
            <img src={phoneIcon} alt="Phone Icon" />
            +55 41 9 1234-4567
          </li>
          <li>
            <img src={locationIcon} alt="Location Icon" />
            Rua dos Coders, 123, Bairro Techville, Cidade da Inovação <br />
            Estado Futuro, Brasil
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form className="row" onSubmit={onSubmit}>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label fw-bold">Seu nome</label>
              <input
                type="text"
                className="form-control"
                placeholder="Escreva aqui"
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label fw-bold">Telefone</label>
              <input
                ref={phoneInputRef}
                type="text"
                className="form-control mb-3"
                placeholder="(__)____-____"
                inputMode="text"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="mb-1 fw-bold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Escreva aqui"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="mb-1 mt-3 fw-bold">Escreva sua mensagem</label>
              <textarea
                className="form-control"
                placeholder="Escreva aqui"
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-center ">
            <button
              className="btn btn-primary rounded my-4 submit-button"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
