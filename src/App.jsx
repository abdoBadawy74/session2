import React, { Component, useState } from "react";
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
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { jwtDecode } from "jwt-decode";


export default function App () {

  const [user, setUser] = useState(null)
  
  function getUserData(){
    let encodedToken = localStorage.getItem("userToken");
      let decodedToke= jwtDecode(encodedToken);
      setUser(decodedToke)
      console.log(decodedToke);
  }


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
            <Route path="register" element={<Register/>}></Route>
            <Route path="login" element={<Login getUser={getUserData}/>}></Route>

            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>

        <Footer />
      </div>
    );
  }


// squence of start project 

// 1- see ui / analysis
// 2- define components
// 3- put global variable 
// 4- define routing 
// 5- start auth 


//  componets | pages | auth

// 