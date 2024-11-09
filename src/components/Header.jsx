import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
const Header = () => {
    const getdata=useSelector((state)=>state.cartreducer.carts);
    console.log("getdata",getdata);

    const [anchorEl, setAnchorEl] = useState(null); // Initialize state with null
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
            <Container>
                <NavLink to='/' className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
                <Nav className="me-auto">
                    <NavLink to="/home" className="text-decoration-none text-light display-none">Home</NavLink>
                </Nav>
                <Badge badgeContent={getdata.length} color="primary"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: "25", cursor: "pointer" }}></i>
                </Badge>
            </Container>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClick={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
            {
                getdata.length?
                <div className='card_details' style={{padding:"10px"}}>
                    <Table>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Resturant Name</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                            getdata.map((e)=>{
                                return(
                                    <tr>
                                        <td>
                                            <img src={e.imgdata} style={{width:"5rem",height:"5em"}} alt='image is not visible' />
                                        </td>
                                        <td>
                                            <p>{e.rname}</p>
                                            <p>Price : ₹ {e.price}</p>
                                            <p>Quantity : {e.qnty}</p>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                     </tbody>
                    </Table>
                </div>:
                <div className='card_details d-flex justify-content-center align-items-center mx-3'>
                    <i className='fas fa-close smallclose' style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                    <p style={{fontSize:20}}>Your cart is Empty</p>
                    <img src='./cart.gif' alt='image is missing' className='image' style={{width:"5rem",padding:"10px"}}/>
                </div>
            }

            </Menu>
        </Navbar>
    );
}

export default Header
