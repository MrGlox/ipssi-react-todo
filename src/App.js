import React from "react";
import "./App.css";

import List from "./components/List";
import Form from "./components/Form";

class App extends React.Component {
  constructor() {
    super();

    console.log(localStorage.getItem("todo"));

    this.state = {
      list: localStorage.getItem("todo")
        ? JSON.parse(localStorage.getItem("todo"))
        : [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    this.setState((prev) => ({
      list: [...prev.list, { content: ev.target[0].value, done: false }],
    }));
  }

  handleClick(index) {
    console.log("click", index);
    const tmpList = this.state.list;
    tmpList[index].done = !tmpList[index].done;

    this.setState({
      list: tmpList,
    });
  }

  render() {
    localStorage.setItem("todo", JSON.stringify(this.state.list));

    console.log(this.state.list);

    return (
      <div className="App">
        <Form handleSubmit={this.handleSubmit} />
        <List list={this.state.list} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
