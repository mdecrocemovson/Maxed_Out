import React, { Component } from 'react';
import TextField from '../components/TextField'
import LocationSearchInput from '../components/LocationSearchInput'


class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      location: "",
      review: "",
      goal: ""
    }
    this.handlePerformedOnChange = this.handlePerformedOnChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocationSelection = this.handleLocationSelection.bind(this)
  }

  handlePerformedOnChange(event) {
    this.setState({performed_on: event.target.value})
  }
  handleLocationChange(event) {
    this.setState({location: event.target.value})
  }
  handleReviewChange(event) {
    this.setState({review: event.target.value})
  }
  handleGoalChange(event) {
    this.setState({goal: event.target.value})
  }

  handleLocationSelection(address){
    this.setState({location: address})
  }

  handleSubmit(event) {
    event.preventDefault()
    let createdWorkout;
    createdWorkout = {
      performed_on: this.state.performed_on,
      location: this.state.location,
      review: this.state.review,
      goal: this.state.goal
    }
    this.props.addWorkout(createdWorkout)
    this.setState({review: "", location: "", goal: ""})
  }

  render () {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="callout" id="set-collection-form">
          <div className="workout-form grid-container">
            <div className="grid-x grid-padding-x workout-form-label">

            <div className="medium-12 cell">
              <label className="workout-form-label" htmlFor="performed_on">Date</label>
              <TextField
                type="date"
                handleChange = {this.handlePerformedOnChange}
                content = {this.state.performed_on}
              />
            </div>

            <div className="medium-12 cell">
            <label className="workout-form-label" htmlFor="location">Location (Where was it?)</label>
              <LocationSearchInput
                value = {this.state.location}
                onChange = {this.handleLocationSelection}
                />
            </div>
            <div className="medium-12 cell">
            <label className="workout-form-label" htmlFor="review">Review (how did you feel?)</label>
            <TextField
              type="text"
              placeholder="Tired, Hungry, etc."
              handleChange = {this.handleReviewChange}
              content = {this.state.review}
            />
            </div>

            <div className="medium-12 cell">
            <label className="workout-form-label" htmlFor="Goals">Goals for next workout</label>
            <TextField
              type="text"
              placeholder="Get 225 on bench, beat my PR, etc."
              handleChange = {this.handleGoalChange}
              content = {this.state.goal}
            />
            </div>
            <div className="submit-workout-button-div">
            <input type="submit" id="submit-workout" className=" submit-workout-button" value="Submit"/>
            </div>
          </div>
        </div>
      </form>
      </div>
    )
  }
}

export default FormContainer;
