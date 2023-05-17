import React, { Component } from "react";

class ReleaseBox extends Component {
  // Component logic and methods

  render() {
    const { data } = this.props;
    return (
      <a
        className="grid-item"
        key={data.id}
        href={`https://www.discogs.com/release/${data.id}`}
      >
        {data.title}
        <img src={data.thumb} alt="Image" />
      </a>
    );
  }
}

export default ReleaseBox;
