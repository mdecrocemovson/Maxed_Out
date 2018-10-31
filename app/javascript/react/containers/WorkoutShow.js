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
      goal: "",
      set_collections: []
    }
    this.addSetCollection = this.addSetCollection.bind(this)
  }

  addSetCollection(setCollection) {
    fetch ('/api/v1/set_collections', {
      credentials: 'same-origin',
      method: 'post',
      body: JSON.stringify(setCollection),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      if (response.ok) {
        alert("This worked!")
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })

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
      this.setState({workout_id: body["id"], user_id: body["user_id"], date: body["date"], location: body["location"], review: body["review"], goal: body["goal"], set_collections: body["set_collections"]})
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div>

        <WorkoutDescription
          date = {this.state.date}
          location = {this.state.location}
          review = {this.state.review}
          goal = {this.state.goal}
          />
        <h3>Total number of sets is {this.state.set_collections.length} </h3>
        <h1 id="add_sets">Let's add some damn sets and reps to this why don't we??</h1>
        <SetCollectionForm
          workout_id = {this.state.workout_id}
          addSetCollection = {this.addSetCollection}
          />
      </div>
    )
  }

}

export default WorkoutShow;
