import React from "react";
import "../index.css";
import { programs, pricing } from "../api/api";
import Dashboard from './Dashboard'

class Overview extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }

  add = () => {
    console.log("adding new card");
  };

  arrayify = (arr1, element) => {
    return arr1.filter(a => a.ProgramID === element);
  };

  stringify = price => {
      price = price.toString()
      if(price.length > 3 && price.length <= 6){
          return `$${price.slice(0, price.length-3)},${price.slice(price.length-3)}`
      }
      else{
          return `$${price}`
      }
  };

  expand = idx => {
    const element = document.getElementsByClassName("hidden-section");
    const whiteElement = document.getElementsByClassName("white-box");
    const inner = document.getElementsByClassName("more");
    if (element[idx].style.display === "flex") {
      element[idx].style.display = "none";
      whiteElement[idx].style.height = "15rem";
      inner[idx].innerHTML = "more";
    } else {
      whiteElement[idx].style.height = "25rem";
      element[idx].style.display = "flex";
      inner[idx].innerHTML = "less";
    }
  };

  render() {
    let newArr = [];
    return (
      <div className="container">
        <div className="green-box" onClick={() => this.add()}>
          <img src="../../assets/plus_icon.png" alt="" />
        </div>
        {programs.map((program, idx) => {
          newArr = this.arrayify(pricing, program.ProgramID);
          return (
            <div key={idx} className="white-box">
              <section className="text-center">
                <span>{program.Name}</span>
                <span>
                  <img
                    src="../../assets/pencil2.png"
                    style={{
                      height: "1.1rem",
                      width: "1.1rem",
                      borderRadius: "2px"
                    }}
                  />
                </span>
              </section>
              <section className="by-month">Sales by Month</section>
              <section className="blue-box-2">
                <span>
                  <img src="../../assets/graph.png" />
                </span>
              </section>
              <section className="tan-box">
                <span className="blue-box-3">
                  Total Monthly <div style={{ fontSize: "13px" }}>Sales</div>
                </span>
                <span className="blue-box-3">
                  Current{" "}
                  <div style={{ fontSize: "13px", fontWeight: "bold" }}>
                    ${program.TotalMonthlySales.toString()}
                  </div>
                </span>
                <span className="blue-box-3" style={{ textAlign: "center" }}>
                  1-year{" "}
                  <img
                    style={{ width: "3rem", height: "1rem" }}
                    src="../../assets/spark_line.png"
                  />
                </span>
              </section>
              <section className="hidden-section">
                <section className="list">
                  <table className='table'>
                  <tbody>
                    <tr>
                      <th style={{width: '5.1rem', fontSize: '0.8rem', verticalAlign: 'top'}}>Price Name</th>
                      <th style={{fontSize: '0.6rem', verticalAlign: 'bottom'}}>Current</th>
                      <th style={{textAlign: 'center', fontSize: '0.6rem', verticalAlign: 'bottom'}}>1-year</th>
                    </tr>
                    {newArr.map((price, idx) => {
                      if (price.Name.length > 14) {
                        price.Name = price.Name.substring(0, 14) + "...";
                      }
                      const newPrice = this.stringify(price.Sales)
                      return (
                        <tr className="border_bottom" key={idx}>
                          <td className="td-list">{price.Name}</td>
                          <td className="td-list">{newPrice}</td>
                          <td className="td-list"><Dashboard /></td>
                        </tr>
                      );
                    })}
                    </tbody>
                  </table>
                </section>
                {/* <img src="../../assets/spark_lines.png" /> */}
              </section>
              <div
                onClick={() => {
                  this.expand(idx);
                }}
                className="by-month more"
              >
                more
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Overview;
