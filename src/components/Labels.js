import React from 'react'
import {Link} from 'react-router-dom'

import '../index.css'

const Labels = props => {
    let {clicked} = props
    const {labels} = props || []
    // this is the inner sub navigation labels, to be displayed when its parent has been clicked
    return (
        <div>
        {labels[0].map(label => {
            return (
              <Link
                to={`/${label}`}
                style={{textDecoration: 'none', color: "#686059"}}
                key={label}
                className="sub-nav"
                id={label}
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