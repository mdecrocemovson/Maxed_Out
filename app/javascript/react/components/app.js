import React from 'react'
import ReactDom from 'react-dom'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import WorkoutContainer from '../containers/WorkoutContainer'
import WorkoutShow from '../containers/WorkoutShow'

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/workouts/new" component={WorkoutContainer}/>
        <Route path="/workouts/:id" component={WorkoutShow}/>
      </Router>
    </div>
  )
}

export default App;
