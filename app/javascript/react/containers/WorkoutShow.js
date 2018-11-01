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
      user_bp_max: "",
      user_squat_max: "",
      user_deadlift_max: "",
      workout_id: "",
      user_id: "",
      date: "",
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
  }

  checkDeadliftMax(weight) {
    if (weight > this.state.user_deadlift_max){
      toast.success(`Congrats on setting a new deadlift max at ${weight}!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  }
  checkBenchMax(weight) {
    if (weight > this.state.user_bp_max){
      toast.success(`Congrats on setting a new bench max at ${weight}!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  }
  checkSquatMax(weight) {
    if (weight > this.state.user_squat_max){
      toast.success(`Congrats on setting a new squat max at ${weight}!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
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
      else if (body.exercise_id == 3){
        this.checkDeadliftMax(body.weight)
      }
      else if (body.exercise_id == 2) {
        this.checkSquatMax(body.weight)
      }
      else if (body.exercise_id == 1){
        this.checkBenchMax(body.weight)
      }
      let current_set_collection = this.state.set_collections
      let newSetCollection = current_set_collection.concat(body)
      this.setState({set_collections: newSetCollection})
    })

  }

  handleDeleteNotification() {
    toast.error('Sets deleted!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }

  handleSetCollectionDelete(id) {
    event.preventDefault()
    fetch(`/api/v1/set_collections/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
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
      this.setState({workout_id: body["id"], user_id: body["user_id"], date: body["date"], location: body["location"], review: body["review"], goal: body["goal"], set_collections: body["set_collections"]})
    })
  }

  componentDidUpdate(){
    fetch(`/api/v1/users/${this.state.user_id}`)
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
      this.setState({user_bp_max: body.max_bench_press,
      user_squat_max: body.max_squat,
      user_deadlift_max: body.max_dead_lift,})
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
          handleDelete = {this.handleSetCollectionDelete}
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
