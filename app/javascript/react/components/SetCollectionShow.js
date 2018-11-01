import React from 'react';

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
        <p>sets: {set.sets}, reps: {set.reps}, weight: {set.weight}</p>
        <button onClick = {deleteSetCollection}>Delete Review</button>
      </div>
      )
  })
  return (
    <div>
      <h3 className="set-collection-header">Here are the sets you performed! (nice job stud this looks good)</h3>
      {exercises}
      <img id="guy-lifting" src="https://i2.wp.com/myzone-strengtheory.netdna-ssl.com/wp-content/uploads/2015/09/mariusz.jpg?w=736&ssl=1"/>
    </div>
  )
}

export default SetCollectionShow;
