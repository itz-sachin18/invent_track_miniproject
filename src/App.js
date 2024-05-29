import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import React from "react";
import Choice from "./Components/choice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import R_regis from "./R_componets/RLogin";
import S_regis from "./S_componets/SLogin";
import R_login from "./R_componets/RSign";
import S_login from "./S_componets/SSign";
import Blank from "./S_componets/Blank";

function App() {
  return (
    <BrowserRouter>
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
        <Route path="/choice" element={<Choice />}></Route>
        <Route path="/choice/S_regis" element={<S_regis />} ></Route>
        <Route path="/choice/R_regis" element={<R_regis />} ></Route>
        <Route path="/choice/R_login" element={<R_login />} ></Route>
        <Route path="/choice/S_login" element={<S_login />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
