import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Homepage from './components/homepage/homepage';
import Projects from './components/projects/projects';
import ContactForm from './components/contact/contact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
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
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;