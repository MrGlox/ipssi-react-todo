import React from "react";

const Form = (props) => (
  <form onSubmit={props.handleSubmit}>
    <label htmlFor="todo">To do</label>
    <input name="todo" type="text" />
  </form>
);

export default Form;
