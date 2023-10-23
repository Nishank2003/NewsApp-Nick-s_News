import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    //runs after render....
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7aa0e9c80b39440ab49be33b7698c4db&page=1&pageSize=16`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // parsedData = this.articles;
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7aa0e9c80b39440ab49be33b7698c4db&page=${
      this.state.page - 1
    }&pageSize=16`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // parsedData = this.articles;
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
    document.documentElement.scrollTop = 0;
  };
  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 16)) {
      // x = 0;
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7aa0e9c80b39440ab49be33b7698c4db&page=${
        this.state.page + 1
      }&pageSize=16`;
      let data = await fetch(url);
      let parsedData = await data.json();
      // parsedData = this.articles;
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
      document.documentElement.scrollTop = 0;
    }
  };

  render() {
    return (
      <div className="container my-3">
        <div
          style={{
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            height: "10vh",
          }}
        >
          <h2>
            <br />
            <u>Nick's News - Top Headlines</u>
          </h2>
        </div>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <br />
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <br />
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            <b>&larr; Previous</b>
          </button>
          <button
            disabled={this.state.page > this.state.totalResults / 16}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            <b>Next &rarr;</b>
          </button>
        </div>
      </div>
    );
  }
}

export default News;
