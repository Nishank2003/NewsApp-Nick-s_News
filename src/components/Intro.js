import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Intro extends Component {
  render() {
    return (
      <div
        className="container"
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "200vh",
        }}
      >
        <h2>
          <i>
            <br />
            <b>
              Nick's News is a website to view quick news articles and keep
              yourself up to date.
            </b>
          </i>
        </h2>
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "20vh",
          }}
        >
          <Link to="/home" className="btn btn-large btn-primary">
            Go to News!!
          </Link>
        </div>
      </div>
    );
  }
}

export default Intro;
