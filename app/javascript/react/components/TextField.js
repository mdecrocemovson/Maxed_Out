import React, { Component } from 'react';

const TextField = (props) => {
  return (
    <div>
    <input
      type={props.type}
      placeholder = {props.placeholder}
      className="form_input textField"
      onChange = {props.handleChange}
      value = {props.content}
      />
  </div>
  )
}

export default TextField;
