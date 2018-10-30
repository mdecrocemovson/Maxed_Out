import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';

import FormContainer from './FormContainer'
import WorkoutDescription from '../components/WorkoutDescription'
import SetCollectionForm from './SetCollectionForm'

class WorkoutShow extends Component {
  constructor (props) {
    super(props);
    this.state = {
      workout_id: "",
      user_id: "",
      date: "",
      location: "",
      review: "",
      goal: ""
    }
  }

  componentDidMount() {
    fetch(`/api/v1/workouts/${this.props.params.id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({workout_id: body["id"], user_id: body["user_id"], date: body["date"], location: body["location"], review: body["review"], goal: body["goal"]})
    })
  }

  render() {
    // debugger
    return (
      <div>

        <WorkoutDescription
          date = {this.state.date}
          location = {this.state.location}
          review = {this.state.review}
          goal = {this.state.goal}
          />
        <a href={`/workouts/${this.state.workout_id}/set_collections/new`}><button id="add_sets">Let's add some damn sets and reps to this why don't we??</button></a>
        <SetCollectionForm />
      </div>
    )
  }

}

export default WorkoutShow;
