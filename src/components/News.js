import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultPropTypes = {
    country: "us",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("News Constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=6e0f8797f2284ae6b480d9126556f5c9&page=${
      this.state.page + 1
    }&pageSize=12`;

    this.setState({
      loading: true,
    });

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false,
    });
  }

  handleOnPrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=6e0f8797f2284ae6b480d9126556f5c9&page=${
      this.state.page + 1
    }&pageSize=12`;

    this.setState({
      loading: true,
    });

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  handleOnNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=6e0f8797f2284ae6b480d9126556f5c9&page=${
      this.state.page + 1
    }&pageSize=12`;

    this.setState({
      loading: true,
    });

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    const myStyle = {
      textAlign: "center",
      background: "black",
      color: "white",
      paddingBottom: "9px",
      fontFamily: "auto",
      paddingTop: "7px",
    };

    return (
      <div className="container my-3">
        <h2 style={myStyle}>Top HeadLines</h2>

        {this.state.loading && <Spinner />}

        <div className="row my-3">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3 my-3" key={element.url}>
                  <NewsItem
                    key={element.url}
                    title={
                      element.title !== null ? element.title.slice(0, 35) : ""
                    }
                    description={
                      element.description !== null
                        ? element.description.slice(0, 50)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
        </div>

        <div className="container">
          <div className="d-grid gap-2 d-flex justify-content-between">
            <button
              className="btn btn-dark btn-lg"
              disabled={this.state.page <= 1}
              type="button"
              onClick={this.handleOnPrevClick}
            >
              &larr; Previous
            </button>
            <button
              className="btn btn-dark btn-lg"
              type="button"
              onClick={this.handleOnNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
