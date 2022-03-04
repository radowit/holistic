import React, { Component } from "react";
import logo from "./logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Holistic</Navbar.Brand>
          </Container>
        </Navbar>
        <Container fluid="md">
          <Row>
            <Col>
              <p>API response: {this.state.response.message}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
