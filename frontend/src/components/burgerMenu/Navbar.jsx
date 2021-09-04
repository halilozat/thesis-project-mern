import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  background: black;
  color: white;
  padding: 0 20px;
  display: flex;
  z-index: 2;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Thesis
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar