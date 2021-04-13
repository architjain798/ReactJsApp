import React from "react";
import "../styling/SearchItem.css";
import Card from "./Card";

class SearchItem extends React.Component {
  prepareAlphabets = () => {
    let result = [];
    for (let i = 65; i < 91; i++) {
      result.push(
        <button
          className="btn-alpha"
          type="button"
          key={i}
          onClick={this.onAlphabetClick}
          value={String.fromCharCode(i)}
        >
          {String.fromCharCode(i)}
        </button>
      );
    }
    return result;
  };
  render() {
    return (
      <div className="search">
        <h2>Lorem Epsum Dollor</h2>
        <span>
          <input id="input-search" type="text" placeholder="enter the value" />
        </span>
        <span>
          <button id="searchBtn">Search</button>
        </span>
        <br />
        <button id="all-btn">ALL</button>
        {this.prepareAlphabets()}
        <div className="list-card">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}
export default SearchItem;
