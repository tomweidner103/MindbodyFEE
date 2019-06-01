import React from "react";
import "../index.css";
// import Charts from "./Charts";
// import '../../node_modules/react-vis/dist/style.css'
import { VictoryLine } from "victory";

class Dashboard extends React.Component {
  render() {
    const data = [
      { x: 0, y: 30001 },
      { x: 1, y: 28889 },
      { x: 2, y: 39000 },
      { x: 3, y: 29084 },
      { x: 4, y: 29084 },
      { x: 5, y: 19080 },
      { x: 7, y: 24854 }
    ];
    return (
      <div>
          <VictoryLine data={data} style={{data: {stroke: "#c43a31"}, responsive:false}} />
      </div>
    );
  }
}

export default Dashboard;
