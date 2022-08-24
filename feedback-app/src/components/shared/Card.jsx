import React from 'react'
import PropTypes from 'prop-types'
function Card({children,reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>
    <div className="num-display">{children.rating}</div>
    <div className="text-display">{children.text}</div>
    </div>
  )
}

Card.defaultProps = {
    reverse:'true'
}

export default Card