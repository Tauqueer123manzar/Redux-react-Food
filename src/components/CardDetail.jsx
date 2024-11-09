import React from 'react'
import './CardDetail.css'
import Table from 'react-bootstrap/Table';
const CardDetail = () => {
  
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Items Details Page</h2>
    <section className='container mt-3'>
      <div className='Imagedetail d-flex border shadow'>
      <div className='items-img'>
        <img src='https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg?output-format=webp' style={{height: "80%", maxWidth: "100%" }} alt='missing image'></img>
      </div>
      <div className='item-detail'>
      <Table>
      <tr>
        <td>
          <p className='mt-1' style={{marginLeft:"20px"}}><strong>Resturant :</strong> Massala <span>Theoryy</span></p>
          <p className='mt-4' style={{marginLeft:"20px"}}><strong>Price :</strong>  ₹ <span>300</span></p>
          <p className='mt-4' style={{marginLeft:"20px"}}><strong>Dishes :</strong><span>North Indian,<br></br></span>Biryani ,Mughali</p>
          <p className='mt-4' style={{marginLeft:"20px"}}><strong>Total :</strong><span>₹ </span>300</p>
        </td>
        <td>
          <p className='mt-4'><strong>Rating :</strong><span style={{backgroundColor:"green",color:"white",padding:"2px 4px",borderRadius:"4px"}}>3.5 *</span></p>
          <p className='mt-2'><strong>Order Review :</strong><span>1175 + <br></br></span>Order placed from here recently</p>
          <p className='mt-4'><strong>Remove : </strong><span style={{color:"red",fontSize:"20px"}}><i class="fa-solid fa-trash"></i></span></p>
        </td>
      </tr>
      </Table>
      </div>
      </div>
    </section>
    </div>
  )
}

export default CardDetail
