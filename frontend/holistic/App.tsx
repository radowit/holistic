import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

type Response = {
  response: { message: "<missing>" };
};

class App extends Component<{}, Response> {
  constructor(props: {}) {
    super(props);
    this.state = { response: { message: "<missing>" } };
  }

  componentDidMount() {
    fetch("http://localhost:8000/", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        this.setState({ response: json });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>holistic/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <p>API response: {this.state.response.message}</p>
        </header>
      </div>
    );
  }
}

export default App;
