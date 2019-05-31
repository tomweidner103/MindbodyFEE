import React from 'react'
import Labels from './Labels'

class Classes extends React.Component {
    constructor() {
        super()
        this.state = {
            selected: "",
            id: ""
        }
    }

    clicked = async word => {
        const ele2 = document.getElementById(this.state.id);
        if (ele2) {
          ele2.className = "sub-nav";
        }
        const ele = document.getElementById(word);
        await this.setState({ selected: ele, id: ele.id });
        this.state.selected.className += " sub-nav-2";
      };

    render(){
        const labels = ["Classes"]
        return (
            <header className="inside-nav">
            <Labels labels={labels} clicked={this.clicked} />
          </header>
        )
    }
}

export default Classes