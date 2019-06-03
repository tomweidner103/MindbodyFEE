import React from "react"
import PropTypes from 'prop-types'
import '../index.css'

class Tab extends React.Component{
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }

    onClick = () => {
        const { label, onClick} = this.props

        onClick(label)
        
    }

    render() {
        const {onClick, props: { activeTab, label}} = this
        let className = "tab-list-item"

        if(label === "Client Home"){
            className += ' min-width'
        }

        if(label === "Retail"){
            className += ' retail'
        }

        if(activeTab === label) {
            className += ' tab-list-active'
        }
        if(label === 'Dashboard'){
            className += " dash"
        }


        return (
            <div>
                <div className='gray-box'></div>
            <li className={className}
            onClick={onClick}>{label}</li>
            </div>

        )
    }
}
export default Tab
