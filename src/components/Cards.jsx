import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import CardDetail from './CardDetail';
import Cardsdata from './Carddata';
import { Button, Container, Grid } from '@mui/material';
const Cards = () => {
  return (
    <div className='container mt-3'>
     <h2 className='text-center'>Add to cart Projects</h2>
     <Container>
     <Grid container spacing={2}>
          {
            Cardsdata.map(element => (
            <Grid key={element.id} item xs={12} md={4} sm={6} lg={4}>
              <Card style={{ width: '22rem', border: 'none' }} className='mx-2 mt-4 Card_style'>
                <Card.Img variant='top' src={element.imgdata} style={{ height: '16rem' }} className='mt-3' />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                    Price : ₹ {element.price}
                  </Card.Text>
                  <div className='button_div d-flex justify-content-center'>
                    <Button variant='primary'>
                      Add to cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Grid>
          ))}
        </Grid>
     </Container>
    </div>
  )
}

export default Cards
