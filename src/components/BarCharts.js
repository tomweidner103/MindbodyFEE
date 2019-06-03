import React from "react";
import {
    BarChart, Bar, XAxis, Tooltip,
  } from 'recharts';

class BarCharts extends React.Component {
  render() {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", 'Sep', "Oct", "Nov", "Dec"]
    const {program} = this.props || []
    const data2 = []
    for(let i = 0; i < program.Sales.CurrentYear.length; i++){
        data2.push({name: months[i], Cur: program.Sales.CurrentYear[i], Prev: program.Sales.PreviousYear[i]})
    }


    return (
      <BarChart width={204} height={92} data={data2} className="blue-box-2" margin={{top: 0, right:0, bottom: -5, left: 0}} barGap={2} barSize={7}>
        <XAxis dataKey="name" style={{fontSize: '10px', color: "#686059", fontWeight: 'lighter'}} interval={0} axisLine={false} tickLine={false}/>
        <Tooltip viewBox={{ x: 10, y: 10, width: 2, height: 2 }} separator={": $"}/>
        <Bar dataKey="Prev" fill="#BAAFF7" animationDuration={2000}/>
        <Bar dataKey="Cur" fill="#AADBBC" animationDuration={2000}/>
      </BarChart>
    );
  }
}

export default BarCharts;
