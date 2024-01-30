import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.scss"
import useAppSelector from "../../hooks/useAppSelector";
import Cart from "../../../features/cart/pages/Cart";
import useAppDispatch from "../../hooks/useAppDispatch";
import { logout } from "../../../features/users/authReducer";

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const cart = useAppSelector(state => state.cartReducer);
  const { currentUser, status } = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className ="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className ="link" to="/">Kuzeyartist</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/about">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/contact">Contact</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products">Stores</Link>
          </div>
        
          <div className="icons">
            <SearchIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{cart.length}</span>
            </div>
            
            { status === 'succeeded' && currentUser ? (
            <>
              <PersonOutlineOutlinedIcon 
              onClick = {() => {
                navigate(`/users/profile/${currentUser._id}`)
              }}
              aria-label = "profile"
              />
              <FavoriteBorderOutlinedIcon
              onClick = {() => {}}
              aria-label = "favorite"
              />
              <LogoutIcon onClick={()=>{
                dispatch(logout())
                navigate('/')
              }}
              aria-label = "logout"
              />
            </>
            ) : (
            <>
              <LoginIcon onClick = {() => {
                navigate('/login')
              }}
              aria-label = "login"
              />
            </>
            )}
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
