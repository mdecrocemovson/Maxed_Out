import React, { Component } from 'react';
import TextField from '../components/TextField'
class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      location: "",
      review: "",
      goal: ""
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(event) {
    this.setState({date: event.target.value})
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

  handleSubmit(event) {
    event.preventDefault()
    let createdWorkout;
    createdWorkout = {
      date: this.state.date,
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
        <form onSubmit={this.handleSubmit} className="callout">
          <div className="workout-form grid-container">
            <div className="grid-x grid-padding-x workout-form-label">

            <div className="medium-6 cell">
              <label className="workout-form-label" htmlFor="date">Date</label>
              <TextField
                type="date"
                handleChange = {this.handleDateChange}
                content = {this.state.date}
              />
            </div>


            <div className="medium-6 cell">
            <label className="workout-form-label" htmlFor="location">Location (Where was it?)</label>
            <TextField
              type="text"
              handleChange = {this.handleLocationChange}
              content = {this.state.location}
            />
            </div>

            <div className="medium-6 cell">
            <label className="workout-form-label" htmlFor="review">Review (how did you feel?)</label>
            <TextField
              type="text"
              handleChange = {this.handleReviewChange}
              content = {this.state.review}
            />
            </div>

            <div className="medium-6 cell">
            <label className="workout-form-label" htmlFor="Goals">Goals for next workout</label>
            <TextField
              type="text"
              handleChange = {this.handleGoalChange}
              content = {this.state.goal}
            />
            </div>



            <input type="submit" className="button submit-workout-button" value="Submit"/>
          </div>
        </div>
      </form>
      </div>
    )
  }
}

export default FormContainer;
