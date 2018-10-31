import React, { Component } from 'react'

const DropdownExercise = (props) => {
  let exerciseDropDown = props.exercises.map((exercise)=> {
    return <option value={exercise.id}>{exercise.name}</option>
  })
  return (
    <div>
      <select onChange={props.handleChange} >
        <option disabled selected value> -- select a lift -- </option>
        {exerciseDropDown}
      </select>
    </div>
  )
}

export default DropdownExercise;
