import React from 'react'
import ReactDom from 'react-dom'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import WorkoutContainer from '../containers/WorkoutContainer'

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/workouts/new" component={WorkoutContainer}/>
      </Router>
    </div>
  )
}

export default App;
