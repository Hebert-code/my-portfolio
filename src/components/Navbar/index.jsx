import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/principais/logo.jpg";
import Buttom from "../common/Buttom";

const menuItems = [
  { id: "home", label: "INÍCIO" },
  { id: "about", label: "SOBRE" },
  { id: "skills", label: "HABILIDADES" },
  { id: "experience", label: "EXPERIÊNCIA" },
  { id: "projects", label: "PROJETOS" },
  { id: "services", label: "SERVIÇOS" },
  { id: "contact", label: "CONTATO" }
];

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.hash);

  useEffect(() => {

    const handleHashChange = () => setActiveLink(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);
    
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const handleClickFora = (event) => {
      if (!event.target.closest(".menu-container")) {
        setMenuAberto(false);
      }
    };

    if (menuAberto) {
      document.addEventListener("click", handleClickFora);
    } else {
      document.removeEventListener("click", handleClickFora);
    }

    return () => document.removeEventListener("click", handleClickFora);
  }, [menuAberto]);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-l from-[#0b1120] to-[#17203a] text-white shadow-lg z-50 py-5">
      <div className="max-w-full mx-auto flex justify-between items-center px-6 xl:px-8 h-16">
        
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-13 h-13 rounded-full " />
          <h1 className="text-lg font-semibold tracking-wide">Hebert</h1>
        </div>

        <ul className="hidden xl:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.id} className="relative group">
              <a
                href={`#${item.id}`}
                className={`text-sm font-medium tracking-widest uppercase hover:text-yellow-400 transition-all duration-300 ${
                  activeLink === `#${item.id}` ? "text-yellow-400" : ""
                }`}
              >
                {item.label}
              </a>
              <div className="absolute left-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex">
          <Buttom
            Link={"#contact"}
            inf={"CONTATO"}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-full shadow-md transition-all duration-300"
          />
        </div>

        <button
          className="xl:hidden text-white menu-container"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <FontAwesomeIcon icon={menuAberto ? faTimes : faBars} className="w-6 h-6" />
        </button>
      </div>

      {menuAberto && (
        <div className="xl:hidden bg-gradient-to-l from-[#0b1120] to-[#17203a] w-full py-4 absolute top-23 left-0 menu-container">
          <ul className="flex flex-col space-y-6 items-center">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-sm font-light uppercase hover:text-yellow-400 transition-all duration-300 ${
                    activeLink === `#${item.id}` ? "text-yellow-400" : ""
                  }`}
                  onClick={() => setMenuAberto(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
