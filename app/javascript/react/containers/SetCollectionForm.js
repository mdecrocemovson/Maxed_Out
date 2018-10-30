import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

class SetCollectionForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      set_count: "",
      reps_count: "",
      weight: "",
      exercise_id: "",
      user_id: ""
    }
  }

  render() {
    return (
      <div>
        Add some sets!
      </div>
    )
  }
}

export default SetCollectionForm;
