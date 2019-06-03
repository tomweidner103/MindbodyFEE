import React from "react";
import "../index.css";
import {
  LineChart, Line
} from 'recharts';

class Charts extends React.Component {

render(){
  const {program} = this.props || []
  let data = []
  for(let i = 0; i < program.Sales.PreviousYear.length; i++){
    data.push({name: i, x: program.Sales.PreviousYear[i]})
  }
  return(
      <LineChart width={60} height={16} data={data} margin={{top: 0, right:0, bottom: 0, left: 10}}>
        <Line type="linear" dataKey="x" stroke="#B6BAA3" strokeWidth={1} dot={false} style={{padding: '0', margin: '0'}} animationDuration={3000}/>
      </LineChart>
    )
  }
}

export default Charts;
