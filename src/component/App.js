import React from "react";
import "../styling/App.css";
import Navbar from "./Navbar";
import MainContent from "./MainContent";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <MainContent />
      </div>
    );
  }
}
export default App;
