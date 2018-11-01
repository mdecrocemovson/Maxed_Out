import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import TextField from '../components/TextField'
import DropdownExercise from '../components/DropdownExercise'

class SetCollectionForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      set_count: "",
      reps_count: "",
      weight: "",
      exercise_id: "",
      exercises: [],
      workout_id: this.props.workout_id,
      errors: ""
    }
    this.handleSetCountChange = this.handleSetCountChange.bind(this)
    this.handleRepsCountChange = this.handleRepsCountChange.bind(this)
    this.handleWeightChange = this.handleWeightChange.bind(this)
    this.handleExerciseChange = this.handleExerciseChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSetCountChange(event) {
    this.setState({set_count: event.target.value})
  }

  handleRepsCountChange(event) {
    this.setState({reps_count: event.target.value})
  }

  handleWeightChange(event) {
    this.setState({weight: event.target.value})
  }

  handleExerciseChange(event) {
    this.setState({exercise_id: event.target.value})
  }

  handleSubmitNotification() {
    toast.success('Set added!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    let createdSetCollection;
    createdSetCollection = {
      sets: this.state.set_count,
      reps: this.state.reps_count,
      exercise_id: this.state.exercise_id,
      workout_id: this.props.workout_id,
      weight: this.state.weight
    }
    if (createdSetCollection.sets == ""){
      this.setState({errors: "Please add some sets"})
    } else if (createdSetCollection.reps == "") {
      this.setState({errors: "Please add some reps"})
    } else if (createdSetCollection.exercise_id == "") {
      this.setState({errors: "Please choose an exercise"})
    } else {
    this.props.addSetCollection(createdSetCollection)
    this.handleSubmitNotification()
    this.setState({set_count: "", reps_count: "", weight: ""})
    }
  }
  componentDidMount() {
    fetch('/api/v1/exercises')
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
      this.setState({exercises: body})
      })
  }

  render() {
    return (
      <div>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
          />
        {this.state.errors}
        <form onSubmit={this.handleSubmit} className="callout">
          <div className="grid-container">
            <div className="grid-x grid-padding-x set-collection-form-label">

            <div className="medium-6 cell">
              <label className="workout-form-label" htmlFor="sets">Sets</label>
              <TextField
              type="number"
              content = {this.state.set_count}
              handleChange ={this.handleSetCountChange}
              />
            </div>

            <div className="medium-6 cell">
            <label className="workout-form-label" htmlFor="reps">Reps</label>
            <TextField
              type="number"
              content = {this.state.reps_count}
              handleChange = {this.handleRepsCountChange}
            />
            </div>

            <div className="medium-6 cell">
            <label className="workout-form-label" htmlFor="weight">Weight</label>
            <TextField
              type="number"
              content = {this.state.weight}
              handleChange = {this.handleWeightChange}
            />
              <label className="workout-form-label" htmlFor="exercise">Exercise</label>
              <DropdownExercise
                exercises = {this.state.exercises}
                handleChange = {this.handleExerciseChange}
                content = {this.state.exercise_id}
              />
            </div>
            <input type="submit" className="button submit-workout-button" value="Submit"/>
          </div>
        </div>
      </form>
      </div>

      </div>
    )
  }
}

export default SetCollectionForm;
