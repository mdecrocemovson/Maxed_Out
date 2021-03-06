import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import swal from 'sweetalert'

import FormContainer from './FormContainer'
import WorkoutDescription from '../components/WorkoutDescription'
import SetCollectionForm from './SetCollectionForm'
import SetCollectionShow from '../components/SetCollectionShow'

class WorkoutShow extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user_bp_max: "",
      user_squat_max: "",
      user_deadlift_max: "",
      workout_id: "",
      user_id: "",
      performed_on: "",
      location: "",
      review: "",
      goal: "",
      errors: "",
      set_collections: [],
      exercises: [],
    }
    this.addSetCollection = this.addSetCollection.bind(this)
    this.handleSetCollectionDelete = this.handleSetCollectionDelete.bind(this)
    this.handleDeleteNotification = this.handleDeleteNotification.bind(this)
    this.checkDeadliftMax = this.checkDeadliftMax.bind(this)
    this.checkBenchMax = this.checkBenchMax.bind(this)
    this.checkSquatMax = this.checkSquatMax.bind(this)
    this.handleSubmitNotification = this.handleSubmitNotification.bind(this)
  }


  handleSubmitNotification() {
    swal({
      title: "Great job adding a set!"
    })
  }

  checkDeadliftMax(weight) {
    if (weight > this.state.user_deadlift_max){
      swal({
        title: "You beat your deadlift max! Nice!",
      })
    } else {
      this.handleSubmitNotification()
    }
  }
  checkBenchMax(weight) {
    if (weight > this.state.user_bp_max){
      swal({
        title: "You beat your bench press max! Nice!",
      })
    }
    else {
      this.handleSubmitNotification()
    }
  }
  checkSquatMax(weight) {
    if (weight > this.state.user_squat_max){
      swal({
        title: "You beat your squat max! Nice!",
      })
    } else {
      this.handleSubmitNotification()
    }
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
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      if (body.errors){
        this.setState({errors: body.errors})
      }
      else {
        // this.handleSubmitNotification()
        this.setState({user_bp_max: body.current_user.max_bench_press, user_squat_max: body.current_user.max_squat, user_deadlift_max: body.current_user.max_dead_lift})
        if (body.exercise_id == 1){
          this.checkBenchMax(body.weight)
        } else if (body.exercise_id == 2) {
          this.checkSquatMax(body.weight)
        } else if (body.exercise_d == 3){
          this.checkDeadliftMax(body.weight)
        }
        let current_set_collection = this.state.set_collections
        let newSetCollection = current_set_collection.concat(body)
        this.setState({set_collections: newSetCollection})
      }
    })

  }

  handleDeleteNotification() {
    swal({
      title: "You deleted a set!",
    })
  }

  handleSetCollectionDelete(id) {
    event.preventDefault()
    fetch(`/api/v1/set_collections/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      credentials: 'same-origin'
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
      .then(response => response.json())
      .then(response => {
        let new_collections = this.state.set_collections.filter(set_collection => set_collection.id != response.id)
        this.setState({set_collections: new_collections})
        this.handleDeleteNotification()
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
      this.setState({workout_id: body["id"], user_id: body["user_id"], performed_on: body["performed_on"], location: body["location"], review: body["review"], goal: body["goal"], set_collections: body["set_collections"]})
    })
  }

  render() {
    return (
      <div>
        <div className="workout-description">
        <WorkoutDescription
          performed_on = {this.state.performed_on}
          location = {this.state.location}
          review = {this.state.review}
          goal = {this.state.goal}
          />
        </div>
        <div className="set-collecton-show">
        <SetCollectionShow
          setCollection = {this.state.set_collections}
          handleDelete = {this.handleSetCollectionDelete}
          />
        </div>

        <div className="set-collection-form">
        {this.state.errors}
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
