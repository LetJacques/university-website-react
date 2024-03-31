import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import menuIcon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <nav
      className={`d-flex align-items-center justify-content-between w-100 z-3 px-5 logo ${
        sticky ? "dark-nav" : ""
      }`}
    >
      <img src={logo} alt="Logo" style={{ width: "200px" }} className="py-2" />
      <img src={menuIcon} className="menu-icon" onClick={toggleMenu} />
      <ul
        className={`fw-semibold m-0 py-2 ${
          mobileMenu ? "show-mobile-menu" : "hide-mobile-menu"
        }`}
      >
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-180}
            duration={100}
            onClick={closeMenu}
            onSetActive={() => handleSetActive("home")}
            className={activeLink === "home" ? "active" : ""}
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            to="programs"
            spy={true}
            smooth={true}
            offset={-290}
            duration={100}
            onClick={closeMenu}
            onSetActive={() => handleSetActive("programs")}
            className={activeLink === "programs" ? "active" : ""}
          >
            Cursos
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-170}
            duration={100}
            onClick={closeMenu}
            onSetActive={() => handleSetActive("about")}
            className={activeLink === "about" ? "active" : ""}
          >
            Sobre nós
          </Link>
        </li>
        <li>
          <Link
            to="campus"
            spy={true}
            smooth={true}
            offset={-270}
            duration={100}
            onClick={closeMenu}
            onSetActive={() => handleSetActive("campus")}
            className={activeLink === "campus" ? "active" : ""}
          >
            Campus
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-350}
            duration={100}
            onClick={closeMenu}
            onSetActive={() => handleSetActive("testimonials")}
            className={activeLink === "testimonials" ? "active" : ""}
          >
            Depoimentos
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
            className={`btn btn-light rounded-pill border-none fw-bold px-4 ${
              activeLink === "contact" ? "active" : ""
            }`}
            onClick={() => {
              closeMenu();
              handleSetActive("contact");
            }}
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
