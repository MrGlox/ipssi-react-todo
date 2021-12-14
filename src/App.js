import React from "react";
import "./App.css";

import List from "./components/List";
import Form from "./components/Form";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.setState((prev) => ({
      list: [...prev.list, { content: ev.target[0].value, done: false }],
    }));
  }

  render() {
    console.log(this.state.list);

    return (
      <div className="App">
        <Form handleSubmit={this.handleSubmit} />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
