import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
// @ts-ignore
import { setReduxActiveCityName } from '../store/citySlice.tsx'
// @ts-ignore
import { getActiveCityByName } from './../services/API/city.tsx'
// @ts-ignore
import Header from "./Header.tsx"
// @ts-ignore
import SimpleMap from "./UI/Map.tsx"
// @ts-ignore
import MainTemp from './MainTemp.tsx'

const ActiveCity = () => {
  const dispatch = useDispatch()
  let history = useHistory()
  const { activeCity } =
  useSelector((state: any) => ({
    activeCity: state.city.cities.activeCity,
  }))
  
  useEffect( () => {  
    const setURL = () => {
      let name = history.location.pathname.replace('/city/', '')
      dispatch(setReduxActiveCityName(name))
      return name
    } 
    let cityName = activeCity ? setURL() : activeCity[0]   
    dispatch(getActiveCityByName(cityName))
    // eslint-disable-next-line
  }, [])     
  const render = () => {
    if (activeCity.data.cod) {
      return (
        <Container>          
          <HeaderItem>
            <StyledNavLink to={'/'}>
              <Name>
                 {activeCity.name}, {activeCity.data.city.country}
              </Name>
            </StyledNavLink>              
          </HeaderItem>
          <Title>
            temp: {activeCity.data.list[0].main.temp}°C
          </Title>
          <Body>
            {activeCity.data.list[0].weather[0].main} 
             ({activeCity.data.list[0].weather[0].description})
            , wind speed {activeCity.data.list[0].wind.speed}
          </Body>  
          <BlockMap>
            <StyleSimpleMap>
              <SimpleMap/> 
            </StyleSimpleMap>            
            <MainTemp/>
          </BlockMap>
        </Container>
      )       
    }    
  }
  useEffect( () => { 
    render()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Active>
      <Header/>
      {render()}      
    </Active>
  )
}
export default ActiveCity

const Active = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 0 50px;
  width: 100%;
  height: auto;
  color: #fff; 
  cursor: pointer;
`;
const Container = styled.div`
  width: 70%;
  height: auto;
  border: 1px solid rgb(129, 129, 129);
  border-radius: 5px;
  background: rgb(88%, 94%, 100%);
  padding: 20px;
  @media (max-width: 1250px){
    width: 95%
  }
`;
const Title = styled.h1`  
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  font-size: 20px;
  color: black;
`;
const HeaderItem = styled.div`
  display: flex;
  padding: 10px 15px 0;
  border-radius: 5px;
  background: linear-gradient(90deg, rgb(0%, 40%, 80%) 100%, rgb(0%, 47%, 94%) 100%);
`;
const Body = styled.div`
background: linear-gradient(90deg, rgb(0%, 40%, 80%) 100%, rgb(0%, 47%, 94%) 100%);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 25px;
`;
const Name = styled.p`
  color: white;
  font-size: 24px;
  padding-bottom: 15px;
  :hover {
    color: rgb(167, 167, 167);
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
const BlockMap = styled.div`
  display: flex;
  @media (max-width: 890px){
    flex-direction: column;
  }  
`;
const StyleSimpleMap = styled.div`
  width: 30%; 
  @media (max-width: 890px){
    align-items: center;
    
  } 
`;