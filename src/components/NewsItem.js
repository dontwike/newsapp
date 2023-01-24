import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;

    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            imageUrl === null
              ? "https://s.yimg.com/os/creatr-uploaded-images/2023-01/7a91fc30-918c-11ed-bfb9-4c5e9ee6a199"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} className="btn btn-dark">
            Read More...
          </a>
          <p className="card-text">
            <small className="text-muted">
              By {author === null ? "NewsLine" : author} on{" "}
              {new Date(date).toDateString()}.
            </small>
          </p>
        </div>
      </div>
    );
  }
}
