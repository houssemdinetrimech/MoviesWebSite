import React from 'react'
import { Card } from 'react-bootstrap';
import './Components.css';
import ReactStars from "react-rating-stars-component";


function CardV({elm}) {
  return (
    <div>
       <div >
          
            <Card className="card" name="one" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={elm.image}/>
            <Card.Body>
              <Card.Title>{elm.name}</Card.Title>
              <Card.Text>
              {elm.description}
              </Card.Text>
           <a href={elm.url}>Watch it</a>
             <div className="star"> <ReactStars 
              count={5}
              edit={false}
              size={24}
              value={elm.rating}
              activeColor="#ffd700"
            /></div>
            </Card.Body>
          </Card>
           
         </div>
    </div>
  )
}

export default CardV




