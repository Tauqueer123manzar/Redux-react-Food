import React from 'react'
import Container from 'react-bootstrap/Container';
import './Home.css'
const Home = () => {
  return (
    <div className='landing-page'>
      <Container>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-sm-10 text-center'>
            <h1 className='text-danger mt-5'>Welcome To Zomato</h1>
            <p className='text-white fs-4'>Find the best restaurant near you!</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search Items" />
              <div className="input-group-append">
                <button className="btn btn-primary" style={{borderRadius:"none"}} type="button">Search</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
