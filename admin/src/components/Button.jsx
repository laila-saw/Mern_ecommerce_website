import React from 'react'

const Button = ({ type }) => {
    return <button className={' widgetLgBtn ' + type}>{type}</button>
  }

export default Button