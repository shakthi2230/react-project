import React from 'react';


const PrimaryButton = ({text, path}) => {
  return (
    <a href={path}>
      <button className= "fw-bold border-0 primary-button">{text}</button >
    </a>
  )
}

export default PrimaryButton