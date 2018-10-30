import React, { Component } from 'react'

const WorkoutDescription = (props) => {
  
  return (
    <div>
      <h2 id="workout-date">{props.date}</h2>
      <h3 id="workout-location">Location: {props.location}</h3>
      <h3 id="workout-review">You described it as: {props.review}</h3>
      <h3 id="workout-goal">You gave your goal for next times workout as {props.goal} </h3>
    </div>
  )
}


export default WorkoutDescription;
