import { useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// @ts-ignore
import { setReduxCitiesList, setReduxActiveCity } from '../store/citySlice.tsx'
import styled from 'styled-components'
// import cityData from '../data/data.json'
import React from 'react'
// @ts-ignore
import { getAllCities, getLocalCities } from '../services/API/city.tsx'


const Cities = () => {
  const dispatch = useDispatch()
  let history = useHistory()  
  const { list, activeCity } = useSelector((state: any) => ({
    list: state.city.cities.list,
    activeCity: state.city.cities.activeCity,
  })) 
  getAllCities()
  useEffect(() => {    
    const cities: any = getLocalCities() 
    if (cities) {
      const list = cities.map((item: any) => {
        return {
          id: item.city.id,
          name: item.city.name,
          country: item.city.country,
          temp: item.list[0].main.temp,
          dt_txt: item.list[0].dt_txt
        }
      })
      dispatch(setReduxCitiesList(list))
    } 
  }, [dispatch, activeCity.name, history.location.pathname])  
  const renderList = () => { 
    type itemType = {
      id: number;
      name: string;
      country: string;
      temp: number;
      dt_txt: string;
    }
    return list.map((item: itemType) => {
      return (
        <Item key={item.id}>
          <StyledNavLink
            to={`/city/${item.name}`}
            onClick={() => {
              dispatch(setReduxActiveCity([
                item.name
              ]))
            }}            
          >
            <ItemHeader>
                <Name>
                  {item.name}, {item.country}
                </Name>
            </ItemHeader>
              <Title>
                temp: {item.temp}°C
              </Title>
            <Body>
              {item.dt_txt}
            </Body>
          </StyledNavLink>
        </Item>
      )
    })
  }
  return (
    <List>  
      <Container>
       {renderList()} 
      </Container>      
    </List>
  )
}
export default Cities

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: between;
  padding-bottom: 15px;
  margin: 75px 0 15px;    
  @media(max-width: 768px){
    flex-direction: column;  
    align-items: center
  }
  @media(max-width: 450px){
      margin: 100px 0 15px
  }
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  width: 80%;
  @media (max-width: 1250px){  
    width: 100%
  }
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
  height: 120px;
  padding: 5px 15px 10px;
  margin-top: 15px;   
  word-wrap: break-word;
  overflow: hidden;
  border-radius: 3px;
  border: 1px solid rgb(233, 233, 233);
  cursor: pointer;
  background: radial-gradient(rgb(0%, 12%, 24%),rgb(0%, 12%, 24%));
  :hover {
    border: 1px solid white;
    box-shadow: 1px 1px 20px  #e6e6e6;
  }
  @media(max-width: 768px){
    width: 90%;
    height: 220px;
  }
`;
const Name = styled.div`
  margin: 0;
  color: white; 
  line-height: 1.4;
  font-weight: bold;
  font-size: 24px;
`;
const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 20px;  
  color: #2884F6 !important;
  line-height: 20px !important;
  padding-bottom: 3px;
;
`;
const Body = styled.div`
  display: flex;
  height: 100%;
  color: blue; 
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;