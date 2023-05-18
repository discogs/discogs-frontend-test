import React, { Component } from "react";

class ReleaseBox extends Component {
  // Component logic and methods

  render() {
    const { data } = this.props;
    const { link } = `https://www.discogs.com/release/${data.id}`;
    return (
      <div>
        <a
          className="thumb"
          key={data.id}
          href={`https://www.discogs.com/release/${data.id}`}
        >
          <img src={data.thumb} alt="Image" />
        </a>
        <div>
          {/* <span className="release-title">{data.title}</span> */}
          <a className="release-title" href="">
            {data.title}
          </a>
        </div>
        <div>
          <span className="release-artist">{data.artist}</span>
        </div>
      </div>
    );
  }
}

export default ReleaseBox;
