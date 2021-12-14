import React from "react";

class Form extends React.Component {
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
      //
      list: [...prev.list, ev.target[0].value], //
    }));
  }

  render() {
    console.log(this.state.list);

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo">To do</label>
        <input name="todo" type="text" />
      </form>
    );
  }
}

export default Form;
