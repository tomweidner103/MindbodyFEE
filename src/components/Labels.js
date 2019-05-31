import React from 'react'
import {Link} from 'react-router-dom'

const Labels = props => {
    let {clicked} = props
    const {labels} = props || []
    return (
        <div>
        {labels[0].map(label => {
            return (
              <Link
                to={`/${label}`}
                style={{color: 'black', textDecoration: 'none'}}
                key={label}
                className="sub-nav"
                id={label}
                style={{color: "#686059"}}
                onClick={() => {
                    clicked(label)
                }
                }
              >
              {label.replace(/_/g, " ")}
              </Link>
            );
          })}
          </div>
    )
}

export default Labels