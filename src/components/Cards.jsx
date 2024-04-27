import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import CardDetail from './CardDetail';
import { Link } from 'react-router-dom';
import Cardsdata from './Carddata';
import './Cards.css'
import CardDetail from './CardDetail';
const Cards = () => {
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to cart Projects</h2>
      <div className='row d-flex justify-content-center align-items-center'>
        {
          Cardsdata.map(element => {
            return (
              <>
                <Card style={{ width: '22rem',border:"none"}} key={element.id} className='cardbox mx-2 my-2'>
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className='mt-3'/>
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    <Button variant="primary" className='col-lg-12'>
                    <Link to="/cart" className='text-white text-decoration-none'>Add to Cart</Link></Button>
                  </Card.Body>
                </Card>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cards
