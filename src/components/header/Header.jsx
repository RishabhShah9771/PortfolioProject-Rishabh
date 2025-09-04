import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false); // Mobile menu toggle
  const [activeNav, setActiveNav] = useState("#home"); // Active link

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");

      // Add or remove "scroll-header" class
      if (window.scrollY >= 80) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }

      const sections = document.querySelectorAll("section[id]");
      if (!sections.length) return;

      let currentActive = null;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - header.offsetHeight; // dynamic offset
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentActive = `#${section.getAttribute("id")}`;
        }
      });

      if (currentActive) {
        setActiveNav(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize active link on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        {/* Logo */}
        <a href="#home" className="nav__logo">
          &lt;Rishabh Shah/&gt;
        </a>

        {/* Navigation menu */}
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#experience"
                onClick={() => setActiveNav("#experience")}
                className={
                  activeNav === "#experience"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-bag-alt nav__icon"></i> Experience
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact Me
              </a>
            </li>
          </ul>

          {/* Close button for mobile menu */}
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        {/* Toggle button for mobile menu */}
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
