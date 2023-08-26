import React from 'react'
import { Card } from 'react-bootstrap'

const SolutionsCard = ({ imgPath, heading, description, path }) => {
    return (
        <Card className="d-flex flex-column h-100">
        <img src={imgPath} className='solutions-img m-2' />
        <Card.Body className="d-flex flex-column">
            <Card.Title className='fw-semibold text-24px'>{heading}</Card.Title>
            <Card.Text className='text-14px text-secondary'>{description}</Card.Text>
            <hr />
           <span>
           <a className="styled-blue-link text-decoration-none mt-auto"
                href={path}>
                Learn More
            </a>
            </span> 
        </Card.Body>
    </Card>
    
    )
}

export default SolutionsCard