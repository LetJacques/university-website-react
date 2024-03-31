import React from 'react'
import './Title.css'

const Title = ({subTitle, title}) => {
  return (
    <div>
      <div className="title d-flex flex-column align-items-center">
       <p>{subTitle}</p>
      <h2>{title}</h2>
      </div>
    </div>
  )
}

export default Title