import React, { Component } from 'react';
import FormContainer from './FormContainer'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


class WorkoutContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      workout: [],
      errors: ""
    }
    this.addWorkout = this.addWorkout.bind(this)
  }

  addWorkout(submission) {
    fetch('/api/v1/workouts', {
      credentials: 'same-origin',
      method: "post",
      body: JSON.stringify(submission),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then (response => response.json())
    .then(body => {
      if (Array.isArray(body)) {
        let errors;
        errors = body.join(", ")
        this.setState({errors: errors})
      } else {
        this.setState({workout: body})
        browserHistory.push(`/workouts/${body.id}`)
      }
    })

  }

  render() {
    let errors;
    if (this.state.errors!=""){
      errors = <h3 id="errors">Please see the following errors: {this.state.errors}</h3>
    }
    return (
      <div>
      <div>
        <h1 className="workout-banner"> Let's track a workout! </h1>
          <div className="holley">
          </div>
          <br/>
          {errors}
        <FormContainer
          addWorkout = {this.addWorkout}
          />
      </div>
      </div>
    )
  }
}

export default WorkoutContainer;
