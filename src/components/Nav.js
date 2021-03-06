import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <NavStyle>
        <h1 ><Link id="logo" to="/">Capture</Link></h1>
        <ul>
          <li>
              <Link  to="/">1. About us</Link>
          </li>
          <li> 
            <Link to="/work">2. Our Work</Link>
          </li>
          <li>
            <Link to="/contact-us">3.Contact Us</Link>
          </li>
        </ul>
    </NavStyle>
  )
}
const NavStyle=styled.nav`
  min-height:10vh;
  background-color:var(--color-nav);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:1rem 10rem;
  margin:auto;
  #logo{
    font-size:4rem;
    font-weight:lighter;
  }
  a{
    font-size:2rem;
    text-decoration:none;
    color:var(--color-nav-link);
  }
  ul{
    display:flex;
    list-style:none;
  }
  li{
    padding-left:10rem;
    position:relative;
  }
 
`
export default Nav
