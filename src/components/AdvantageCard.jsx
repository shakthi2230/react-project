import React from 'react'


const AdvantageCard = ({imgPath, heading, description}) => {
  return (
    <div className="card border-0">
    <div className="d-flex align-items-start">
      <img src={imgPath} className="advantage-card-img px-3" alt="Card" />
    </div>
    <div className="card-body">
      <h5 className="card-title text-24px fw-semibold">{heading}</h5>
      <p className="card-text text-14px text-secondary">{description}</p>
    </div>
  </div>
  )
}

export default AdvantageCard