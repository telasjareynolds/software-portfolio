import Logo from "../../assets/Logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";
import resume from "../../assets/resume.pdf";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/">
          {" "}
          <img src={Logo} alt="header logo" className="header__logo" />
        </NavLink>
        <div className="header__nav">
          <NavLink to="/" className="header__link">
            {" "}
            Home
          </NavLink>
          <a className="header__link" href={resume} target="_blank">
            Resume
          </a>
          <NavLink to="/projects" className="header__link">
            {" "}
            Projects
          </NavLink>
          <NavLink to="/contact" className="header__link">
            {" "}
            Contact
          </NavLink>
          <NavLink to="/ebook" className="header__link">
            {" "}
            E-Book
          </NavLink>
        </div>

        <NavLink to="/">
          {" "}
          <img src={Logo} alt="header logo" className="header__logo" />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
