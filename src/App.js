import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Homepage from './components/homepage/homepage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Homepage />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;