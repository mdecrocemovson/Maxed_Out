import React, { Component } from 'react';

const TextField = (props) => {
  return (
    <div>
    <input
      type={props.type}
      className="textField"
      onChange = {props.handleChange}
      value = {props.content}
      />
  </div>
  )
}

export default TextField;
