import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';

import FormContainer from './FormContainer'
import WorkoutDescription from '../components/WorkoutDescription'
import SetCollectionForm from './SetCollectionForm'
import SetCollectionShow from '../components/SetCollectionShow'

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
      set_collections: [],
      exercises: []
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
    .then(response => response.json())
    .then(body => {
      let current_set_collection = this.state.set_collections
      let newSetCollection = current_set_collection.concat(body)
      this.setState({set_collections: newSetCollection})
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
    return (
      <div>
        <div className="workout-description">
        <WorkoutDescription
          date = {this.state.date}
          location = {this.state.location}
          review = {this.state.review}
          goal = {this.state.goal}
          />
        </div>
        <div className="set-collecton-show">
        <SetCollectionShow
          setCollection = {this.state.set_collections}
          />
        </div>
        <h1 id="add_sets">Let's add some damn sets and reps to this why don't we??</h1>
        <div className="set-collection-form">
        <SetCollectionForm
          workout_id = {this.state.workout_id}
          addSetCollection = {this.addSetCollection}
          user_id = {this.state.user_id}
          />
        </div>
      </div>
    )
  }

}

export default WorkoutShow;
