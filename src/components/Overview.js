import React from "react";
import "../index.css";
import { programs } from "../api/api";

class Overview extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      totalMonthly: ""
    };
  }

  add = () => {
    console.log("adding new card");
  };

  total = () => {

  }

  render() {
    return (
      <div className="container">
        <div className="green-box" onClick={() => this.add()}>
          <img src="../../assets/plus_icon.png" alt="" />
        </div>
        {programs.map((program, idx) => {
            let sales = program.TotalMonthlySales.toString()
            let arr = sales.split('')
            for(let i = arr.length-1; i > 0; i-3){
                arr.push(',')
            }
          return (
            <div key={idx} className="white-box">
              <section className="text-center"><span>{program.Name}</span>
              <span>
                <img
                  src="../../assets/pencil2.png"
                  style={{ height: "1.1rem", width: "1.1rem", borderRadius: "2px" }}
                /></span>
            </section>
            <section className="by-month">Sales by Month</section>
            <section className="blue-box-2"><span><img src="../../assets/graph.png" /></span></section>
            <section className="blue-box">
                <section className="tan-box">
                    <span className='blue-box-3'>Total Monthly <div style={{fontSize: '13px'}}>Sales</div></span>
                    <span className='blue-box-3'>Current <div style={{fontSize: '13px', fontWeight:'bold'}}>${program.TotalMonthlySales.toString()}</div></span>
                    <span className='blue-box-3' style={{textAlign: 'center'}}>1-year  <img style={{width: '3rem', height: '1rem'}}src="../../assets/spark_line.png" /></span>
                </section>
            </section>
        </div>
          );
        })}
      </div>
    );
}
}

export default Overview;
