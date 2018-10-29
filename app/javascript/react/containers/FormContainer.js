import React, { Component } from 'react';
import TextField from '../components/TextField'
class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
    }
  }

  componentDidMount() {
    fetch('https://wger.de/api/v2/exercise/')
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
      // debugger

    })
  }

  render () {
    return (
      <div>
        <form className="callout">
          <div className="workout-form grid-container">
            <div className="grid-x grid-padding-x">

            <div className="medium-6 cell">
              <label htmlFor="exercise">Exercise</label>
              <TextField
              />
            </div>

            <div className="medium-6 cell">
            <label htmlFor="sets">Sets</label>
            <TextField
            />
            </div>

            <div className="medium-6 cell">
            <label htmlFor="reps">Reps</label>
            <TextField
            />
            </div>

            <input type="submit" className="button" value="Submit"/>
          </div>
        </div>
      </form>
      </div>
    )
  }
}

export default FormContainer;
