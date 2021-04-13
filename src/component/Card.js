import React from "react";
import "../styling/Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card-head">
        <div className="card-image"></div>
        <div className="card-detail">
          <h2>lorem Epsum</h2>
          <p>lorem epsum dummy text</p>
        </div>
      </div>
    );
  }
}
export default Card;
