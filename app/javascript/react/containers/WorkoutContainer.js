import React, { Component } from 'react';
import FormContainer from './FormContainer'

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
      <div className="holley">
        <h1>Lets go!</h1>
        <h1>Lift some weights!</h1>
      </div>
      <div>
        <h1> Hello from the Workout Form! </h1>
        <FormContainer />
      </div>
      </div>
    )
  }
}

export default WorkoutContainer;
