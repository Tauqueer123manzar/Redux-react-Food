import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import CardDetail from './CardDetail';
import { Link } from 'react-router-dom';
import Cardsdata from './Carddata';
import './Cards.css'
import { useDispatch } from 'react-redux';
import {ADD} from '../redux/actions/action';
import CardDetail from './CardDetail';
const Cards = () => {

  const[data,setData]=useState(Cardsdata);
  console.log("data",data);

  const dispatch=useDispatch();
  
  const send=(e)=>{
     dispatch(ADD(e));
  }
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to cart Projects</h2>
      <div className='row d-flex justify-content-center align-items-center'>
        {
          data.map(element => {
            return (
              <>
                <Card style={{ width: '22rem',border:"none"}} key={element.id} className='cardbox mx-2 my-2'>
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className='mt-3'/>
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    <Button variant="primary" onClick={()=> send(element)} className='col-lg-12'>Add to Cart</Button>
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
