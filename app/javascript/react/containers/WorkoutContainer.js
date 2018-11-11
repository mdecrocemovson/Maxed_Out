import React, { Component } from 'react';
import FormContainer from './FormContainer'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


class WorkoutContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      workout: []
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
      this.setState({workout: body})
      browserHistory.push(`/workouts/${body.id}`)
    })

  }

  render() {
    return (
      <div>

      <div>
        <h1 className="workout-banner"> Let's track a workout! </h1>
          <div className="holley">
          </div>
          <br/>
        <FormContainer
          addWorkout = {this.addWorkout}
          />
      </div>
      </div>
    )
  }
}

export default WorkoutContainer;
