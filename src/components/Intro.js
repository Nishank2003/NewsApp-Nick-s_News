import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Intro extends Component {
  render() {
    const containerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "linear-gradient(to bottom, #f0f0f0, #d8d8d8)",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    };

    const headingStyle = {
      fontSize: "2rem",
      fontStyle: "italic",
      fontWeight: "bold",
      margin: "20px 0",
    };

    const buttonStyle = {
      fontSize: "1.5rem",
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      borderRadius: "5px",
      textDecoration: "none",
    };

    return (
      <div style={containerStyle}>
        <h2 style={headingStyle}>
          Nick's News is a website to view quick news articles and keep yourself
          up to date.
        </h2>
        <br />
        <Link to="/home" style={buttonStyle}>
          Go to News!!
        </Link>
      </div>
    );
  }
}

export default Intro;
