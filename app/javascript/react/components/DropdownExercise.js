import React, { Component } from 'react'

const DropdownExercise = (props) => {
  let exerciseDropDown = props.exercises.map((exercise)=> {
    return <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
  })
  return (
    <div>
      <select onChange={props.handleChange} >
        <option selected="true" disabled="disabled">Choose Workout</option>  
        {exerciseDropDown}
      </select>
    </div>
  )
}

export default DropdownExercise;
