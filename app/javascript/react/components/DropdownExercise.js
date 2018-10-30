import React, { Component } from 'react'

const DropdownExercise = (props) => {
  let exerciseDropDown = props.exercises.map((exercise)=> {
    return <option value={exercise.id}>{exercise.name}</option>
  })
  return (
    <div>
      <select onChange={props.handleChange} >
        {exerciseDropDown}
      </select>
    </div>
  )
}

export default DropdownExercise;
