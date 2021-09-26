import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Homepage from './components/homepage/homepage';
import Projects from './components/projects/projects';
import ContactForm from './components/contact/contact';
import Resume from './components/resume/resume';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/react-portfolio/">
            <Homepage />
          </Route>
          <Route exact path="/about">
            <Homepage />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <ContactForm />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;