import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Chart } from "react-google-charts";

const options = {
  title: "Please just let me die",
  curveType: "function",
  legend: { position: "bottom" }
};

class UserGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: "",
      bench_press_array: [],
      squat_array: [],
      deadlift_array: []
    }
  }

  componentDidMount(){
    fetch (`/api/v1/exercises/1/set_collections/1`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({bench_press_array: body})
    })
    .then(

    fetch (`/api/v1/exercises/1/set_collections/2`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({squat_array: body})
    }))
    .then(


    fetch (`/api/v1/exercises/1/set_collections/3`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({deadlift_array: body})
    }))
  }
  render() {
    let benchCounter = 0;
    let squatCounter = 0;
    let deadCounter = 0;
    let dataBench = [["Workout","Bench Press Logged"]]
    let dataSquat = [["Workout", "Squat Logged"]]
    let dataDead = [["Workout", "Deadlift Logged"]]
    let benchLength = this.state.bench_press_array.length
    let squatLength = this.state.squat_array.length
    let deadLength = this.state.deadlift_array.length
    while (benchCounter < benchLength) {
      let bench_weight = parseInt(this.state.bench_press_array[benchCounter].weight)
      dataBench.push([benchCounter+1, bench_weight])
      benchCounter = benchCounter + 1;
    }
    while (squatCounter < squatLength) {
      let squat_weight = parseInt(this.state.squat_array[squatCounter].weight)
      dataSquat.push([squatCounter+1, squat_weight])
      squatCounter = squatCounter + 1;
    }
    while(deadCounter < deadLength) {
      let dead_weight = parseInt(this.state.deadlift_array[deadCounter].weight)
      dataDead.push([deadCounter+1, dead_weight])
      deadCounter = deadCounter + 1;
    }
    return(
      <div className="background-chart">
        <div className="chart-div">
          <div className={"my-pretty-chart-container"}>
            <Chart
              chartType="Line"
              className="chart"
              data={dataBench}
              options={options}
              width="60%"
              height="600px"
              legendToggle
              />
          </div>
        </div>
        <div className="chart-div">
          <div className={"my-pretty-chart-container"}>
            <Chart
              chartType="Line"
              className="chart"
              data={dataSquat}
              options={options}
              width="60%"
              height="600px"
              legendToggle
              />
          </div>
        </div>
        <div className="chart-div">
          <div className={"my-pretty-chart-container"}>
            <Chart
              chartType="Line"
              className="chart"
              data={dataDead}
              options={options}
              width="60%"
              height="600px"
              legendToggle
              />
          </div>
        </div>
      </div>
    )
  }
}


export default UserGraph;
