import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = () => {
    return (
      <header>
              <nav className="links">
                  <ul className="level has-text-centered is-tablet">
                      <li className="level-item">
                          <NavLink to="/about" activeStyle={{ color: "#d45fc2"}} className="links">About</NavLink>
                      </li>
                      <li className="level-item">
                      <NavLink to="/projects" activeStyle={{ color: "#d45fc2"}} className="links">Work</NavLink>
                      </li>
                      <li className="level-item">
                      <h1 id="hero" className="level-item">
                          Clay Holland
                      </h1>
                      </li>
                      <li className="level-item">
                      <NavLink to="/contact" activeStyle={{ color: "#d45fc2"}} className="links">Contact</NavLink>
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