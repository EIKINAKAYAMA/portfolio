import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-logo">
          <a href=".">Eiki Nakayama</a>
        </h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <a href="#works">Resume</a>
            </li>
            <li className="header-nav-item">
              <a href="#works">Works</a>
            </li>
            <li className="header-nav-item">
              <a href="#skill">Skill</a>
            </li>
            <li className="header-nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
