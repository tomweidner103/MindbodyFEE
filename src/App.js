import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Labels from "./components/Labels";
// import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
// import Classes from "./components/Classes";
import Overview from "./components/Overview";
import {tabs} from './api/api'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: "",
      id: "Business_Overview",
      tab: ""
    };
  }

  async componentDidMount(){
    const ele = await document.getElementById(this.state.id)
    ele.className += " sub-nav-2"
  }

  clicked = async word => {
    const ele2 = await document.getElementById(this.state.id);
    if (ele2) {
      ele2.className = "sub-nav";
    }
    const ele = await document.getElementById(word);
    if (ele) {
      ele.className = "sub-nav sub-nav-2";
      await this.setState({ selected: ele, id: ele.id });
    }

  };

  render() {
    return (
      <div className="nav">
        <img src="../../assets/logo.png" alt="" className="logo-img" />
        <div>
          <NavBar>
            {
              tabs.map((tab, idx) => {
                return (
                  <div key={idx} label={`${Object.keys(tab).toString().replace(/_/g, " ")}`}>
                    <header className='inside-nav'>
                      <Labels
                      labels={Object.values(tab)}
                      clicked={this.clicked}
                      />
                    </header>
                  </div>
                )
              })
            }
          </NavBar>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Overview} />
            <Route exact path="/Dashboard" component={Dashboard} />
            {/* <Route exact path="/dashboard" component={Overview} /> */}
            {/* <Route exact path="/Classes/Classes" component={Classes} /> */}
            <Route exact path="/Business_Overview" component={Overview} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
