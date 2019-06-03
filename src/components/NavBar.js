import React from "react";
import PropTypes from "prop-types";
import "../index.css";
import { Link } from "react-router-dom";
import Tab from "./Tab";

class NavBar extends React.Component {
  // make sure this.props.children is an array
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
      tabChildren: {}
    };
  }
  async componentDidMount() {
    await this.setState({ activeTab: this.props.children[0].props.label });
  }

  onClickTab = tab => {
    this.setState({ activeTab: tab });
  };
  render() {
    const {
      onClickTab,
      props: { children },
      state: { activeTab }
    } = this;
    return (
      <div>
        <div className="tab-list">
          {children.map(child => {
            const { label } = child.props;
            // set home to destination if Dashboard is clicked
            if (label === "Dashboard") {
              return (
                <Link to="/home" style={{ textDecoration: "none" }} key={label}>
                  <Tab
                    activeTab={activeTab}
                    key={label}
                    label={label}
                    onClick={onClickTab}
                  />
                </Link>
              );
            }
            // this maps throught the tabs and picks out the active one. Link changes each click
            return (
              <Link
                to={`/${label}`}
                style={{ textDecoration: "none" }}
                key={label}
              >
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClick={onClickTab}
                />
              </Link>
            );
          })}
        </div>
        <div className="tab-content">
          {children.map(child => {
            // this returns the children of each active label, which i have defined in 'api.js'
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default NavBar;
