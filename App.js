import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header";
import ListItem from "./component/ListItem";
class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="App">
        <Header />
        <ListItem />
      </div>
    );
  }
}

export default App;
