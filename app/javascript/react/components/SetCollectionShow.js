import React from 'react';
import { Chart } from "react-google-charts";

const SetCollectionShow = (props) => {
  let exercises = props.setCollection.map((set) => {
    let deleteSetCollection = () => {
        if (confirm("Are you sure you want to delete this review?")){
          props.handleDelete(set.id)
        }
      }
    return (
      <div key = {set.id}>
      <h4 className="exercise-name" key={set.id}>{set.exercise.name}:</h4>
        <p className="sets-reps-name">sets: {set.sets}, reps: {set.reps}, weight: {set.weight}</p>
        <button className="delete-set-collection" onClick = {deleteSetCollection}>Delete Review</button>
      </div>
      )
  })
  return (
    <div>
    <div>
      <img className="dost-thou" src="http://assets.schwarzenegger.com/uploads/images/index/cache/1a44b4a15853cd473d365ad724404c9d_608_334_c1.jpg"/>
      <h3 className="set-collection-header">Here are the sets you performed! (nice job stud this looks good)</h3>
      {exercises}
    </div>
    </div>
  )
}

export default SetCollectionShow;
