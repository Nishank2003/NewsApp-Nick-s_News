import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";
import Intro from "./components/Intro";
import About from "./components/About";

export default class App extends Component {
  c = "Nick";
  pageSize = 12;
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="/intro" element={<Intro />} />
          <Route
            exact
            path="/home"
            element={<News key="home" pageSize={this.pageSize} country="in" />}
          />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
