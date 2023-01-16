import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Header = () => {   
  return (
    <StyleHeader>
      <Container>
        <Menu>
          <SNavLink to={'/'} >Home</SNavLink>
        </Menu>
      </Container>
    </StyleHeader>
  )
}
export default Header

const StyleHeader = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;  
  background: #222;
  width: 100%;
  height: 67px;
  z-index: 10;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  @media (max-width: 1250px){
    width: 90%
  }
`;
const Menu = styled.ul`
  display: flex;
  @media (max-width: 450px){
    :nth-child(1){
      margin-right: 8px;
  }
`;
const SNavLink = styled(NavLink)`
  background-image: linear-gradient(
    to right,
    #54b3d6,
    #54b3d6 50%,
    #2884f6 0%
  );
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 0 15px;
  position: relative;
  font-size: 22px;
  font-weight: bold;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  :before{
    content: '';
    background: #54b3d6;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  };
  :hover {
    background-position: 0;
    opacity: .7;
  };
  :hover::before{
    width: 100%;
  }
  &.active {
    opacity: 1;
  }  
  @media (max-width: 450px){
    font-size: 18px;
    padding: 0 5px;
  }
`;