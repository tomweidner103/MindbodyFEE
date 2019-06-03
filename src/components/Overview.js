import React from "react";
import "../index.css";
import { programs, pricing } from "../api/api";
import Charts from "./Charts";
import BarCharts from "./BarCharts";

class Overview extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      queue: []
    };
  }

  componentDidMount() {
    this.setState({
      queue: programs.slice(3),
      cards: programs.slice(0, 3)
    });
  }

  add = () => {
    //   for future use

    //   this.setState({
    //       cards: [...programs, newProgram]
    //   })
    console.log("adding new card");
  };

  //this function makes a new array for each matching program card
  arrayify = (arr1, element) => {
    return arr1.filter(a => a.ProgramID === element);
  };

  //this converts the price from a number to a string with the correct commas and $
  stringify = (price, str = "") => {
    let right = 6;
    let left = 3;
    price = price.toString();
    let length = price.length;
    if (!price.includes(".") && str === "in") {
      price += ".00";
    } else if (price.includes(".")) {
      left += 3;
    }
    if (length > left) {
      return `$${price.slice(0, length - left)},${price.slice(length - left)}`;
    } else {
      return `$${price}`;
    }
  };

  expand = idx => {
    const element = document.getElementsByClassName("hidden-section");
    const whiteElement = document.getElementsByClassName("white-box");
    const inner = document.getElementsByClassName("more");
    if (element[idx].style.display === "flex") {
      element[idx].style.display = "none";
      whiteElement[idx].style.height = "15rem";
      inner[idx].innerHTML =
        "<div id='more' style='padding-left: 1.5rem;'>more</div>";
    } else {
      whiteElement[idx].style.height = "25rem";
      element[idx].style.display = "flex";
      inner[idx].innerHTML =
        "<div id='more' style='padding-left: 1.5rem;'>less</div>";
    }
  };

  addToVisible = newCard => {
    let arr = [...this.state.queue];
    let filteredArr = arr.filter(
      element => newCard.ProgramID !== element.ProgramID
    );
    this.setState({
      cards: [...this.state.cards, newCard],
      queue: filteredArr
    });
  };

  render() {
    let newArr = [];
    let programList = this.state.queue || [];
    let visibleCards = this.state.cards || [];
    return (
      <div className="container">
        <div className="green-box" onClick={() => this.add()}>
          <img src="../../assets/plus_icon.png" alt="" />
        </div>
        <section className="body-cards">
          <div className="body-whole">
            {visibleCards.map((program, idx) => {
              newArr = this.arrayify(pricing, program.ProgramID);
              return (
                <div key={idx} className="white-box">
                  <section className="text-center">
                    <span>{program.Name}</span>
                    <span>
                      <img
                        alt=""
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
                      <BarCharts program={program} />
                    </span>
                  </section>
                  <section className="tan-box">
                    <span className="blue-box-3">
                      Total Monthly{" "}
                      <div style={{ fontSize: "13px" }}>Sales</div>
                    </span>
                    <span className="blue-box-3">
                      Current{" "}
                      <div style={{ fontSize: "13px", fontWeight: "bold" }}>
                        {this.stringify(program.TotalMonthlySales)}
                      </div>
                    </span>
                    <span
                      className="blue-box-3"
                      style={{ textAlign: "center" }}
                    >
                      1-year{" "}
                      <img
                        alt=""
                        style={{ width: "3rem", height: "1rem" }}
                        src="../../assets/spark_line.png"
                      />
                    </span>
                    <span className="black-box" />
                  </section>
                  <section className="hidden-section">
                    <section className="list">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th
                              style={{
                                width: "5.1rem",
                                fontSize: "0.8rem",
                                verticalAlign: "top"
                              }}
                            >
                              Price Name
                            </th>
                            <th
                              style={{
                                fontSize: "0.6rem",
                                verticalAlign: "bottom"
                              }}
                            >
                              Current
                            </th>
                            <th
                              style={{
                                textAlign: "center",
                                fontSize: "0.6rem",
                                verticalAlign: "bottom"
                              }}
                            >
                              1-year
                            </th>
                          </tr>
                          {newArr.map((price, idx) => {
                            if (price.Name.length > 14) {
                              price.Name = price.Name.substring(0, 14) + "...";
                            }
                            const newPrice = this.stringify(price.Sales);

                            //Charts component is making the little charts on each card, sending in the program each time to get the sales data. Since I don't have current sales data for each category, I just used the previous years sales for each program
                            return (
                              <tr className="border_bottom" key={idx}>
                                <td className="td-list">{price.Name}</td>
                                <td className="td-list">{newPrice}</td>
                                <td className="td-list">
                                  <Charts program={program} />
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </section>
                  </section>
                  <div
                    onClick={() => {
                      this.expand(idx);
                    }}
                    className="by-month more"
                  >
                    <div id="more" style={{ paddingLeft: "1.5rem" }}>
                      more
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <section>
            <div className="titles">
              <div className="title-names" style={{ fontSize: "0.8rem" }}>
                All Programs
              </div>
              <div className="title-names" style={{ fontSize: "0.5rem" }}>
                Monthly Sales
              </div>
              <div
                className="title-names"
                style={{ fontSize: "0.5rem", alignContent: "bottom" }}
              >
                Monthly Attendance
              </div>
            </div>
            <table className="initial-load">
              <tbody>
                {programList.map((program, idx) => {
                  return (
                    <tr key={idx} style={{ marginBottom: "2rem" }}>
                      <td
                        onClick={() => this.addToVisible(program)}
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: "bold",
                          minWidth: "120px",
                          padding: 0
                        }}
                      >
                        {program.Name} <br />
                        <div
                          style={{
                            fontSize: "0.6rem",
                            fontWeight: "lighter",
                            marginBottom: "1rem"
                          }}
                        >
                          more
                        </div>
                      </td>
                      <td
                        style={{
                          minWidth: "120px",
                          marginBottom: "1rem",
                          verticalAlign: "top"
                        }}
                      >
                        {this.stringify(program.TotalMonthlySales, "in")}
                      </td>
                      <td
                        style={{
                          minWidth: "160px",
                          marginBottom: "1rem",
                          verticalAlign: "top"
                        }}
                      >
                        {program.MonthlyAttendance}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </section>
      </div>
    );
  }
}

export default Overview;
