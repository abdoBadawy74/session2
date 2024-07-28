import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Parent from "./Parent";
import Gallary from "./Gallary";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Projects from "./Projects";
import Web from "./Web";
import Mobile from "./Mobile";
import Movies from "./Movies";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="contianer ">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="gallary" element={<Gallary />}></Route>
            <Route path="parent" element={<Parent />}></Route>
            <Route path="movies" element={<Movies />}></Route>

            <Route path="projects" element={<Projects />}>
              <Route path="web" element={<Web />} />
              <Route path="mobile" element={<Mobile />} />
            </Route>

            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>

        <Footer />
      </div>
    );
  }
}

// routing
// react-router-dom
