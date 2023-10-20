import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";
import Intro from "./components/Intro";
import About from "./components/About";

export default class App extends Component {
  c = "Nick";
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/home" element={<News />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    );
  }
}
