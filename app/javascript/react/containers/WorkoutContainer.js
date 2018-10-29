import React, { Component } from 'react';

class WorkoutContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      sets : []
    }
  }
  render() {
    return (
      <div>
        <h1> Hello from the Workout Form! </h1>
        <FormContainer />
      </div>
    )
  }
}

export default WorkoutContainer;
