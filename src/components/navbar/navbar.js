import React from 'react';

const navbar = () => {
    return (
      <header>
              <nav className="links">
                  <ul className="level has-text-centered is-tablet">
                      <li className="level-item">
                          <a href="#about-me" className="links">About</a>
                      </li>
                      <li className="level-item">
                          <a href="#work" className="links">Work</a>
                      </li>
                      <li className="level-item">
                      <h1 id="hero" className="level-item">
                          Clay Holland
                      </h1>
                      </li>
                      <li className="level-item">
                          <a href="#contact" className="links">Contact</a>
                      </li>
                      <li className="level-item">
                          <a href="./assets/images/Clay Holland Resume 2021.pdf" className="links">Resume</a>
                      </li>
                  </ul>
              </nav>
      </header>
    )
};

export default navbar;