import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import React from 'react';
import Choice from "./Components/choice";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import R_regis from "./R_componets/RLogin";
import S_regis from "./S_componets/SLogin";
import R_login from "./R_componets/RSign";
import S_login from "./S_componets/SSign";

function App() {
  return (
    <Router>
      
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
              
                <Home />
                <About />
                <Work />
                <Testimonial />
                <Contact />
                <Footer />
              </div>
            }
          />
          <Route
            path="/choice"
            element={
              <div>
                <Choice />
              </div>
            }
          />
          <Route
            path="/choice/S_regis"
            element={
              <div>
                <S_regis />
              </div>
            }
          />
          <Route
            path="/choice/R_regis"
            element={
              <div>
                <R_regis />
              </div>
            }
          />
          <Route
            path="/choice/R_login"
            element={
              <div>
                <R_login />
              </div>
            }
          />
          <Route
            path="/choice/S_login"
            element={
              <div>
                <S_login />
              </div>
            }
          />
          
        </Routes>
        
      
    </Router>
  );
}

export default App;