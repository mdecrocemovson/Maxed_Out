import React, { Component } from 'react'

const WorkoutDescription = (props) => {

  return (
    <div>
      <h2 id="workout-date">Your workout on : {props.date}</h2>
      <h3 id="workout-location">Location: <span className="user-input">{props.location}</span></h3>
      <h3 id="workout-review">Description: <span className="user-input">{props.review}</span></h3>
      <h3 id="workout-goal">Goal: <span className="user-input">{props.goal}</span> </h3>
    </div>
  )
}


export default WorkoutDescription;
