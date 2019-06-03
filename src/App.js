import React from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Labels from "./components/Labels";
// import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import Classes from "./components/Classes";
import Overview from "./components/Overview";
import {tabs} from './api/api'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: "",
      id: "Business_Overview",
      tab: "",
      path: ''
    };
  }

  async componentDidMount(){
    // making sure Business Overview is loaded first, and changing the class to bold
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
    {/*This component defines the tabs in the nav bar, and also all of their children that will be clickable links*/}
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
            {/* Routing to different tabs */}
            <Route exact path="/" component={Overview} />
            <Route exact path="/home" component={Overview} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/Classes" component={Classes} />
            <Route exact path="/Business_Overview" component={Overview} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
