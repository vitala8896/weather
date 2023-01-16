import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'


const MainTemp = () => { 
  const { activeCity, list } =
  useSelector((state: any) => ({
    activeCity: state.city.cities.activeCity,
    list: state.city.cities.activeCity.data.list
  }))  
  const renderList = () => {
    if (activeCity.data.cod) {
      return list.map((item: any, ind: React.Key) => {
        return (
          <Elem key={ind}>{item.dt_txt} - temp: {item.main.temp}°C</Elem>
        )
      })      
    }    
  }
  useEffect( () => { 
    renderList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCity.name])
  return (
    <StyleMainTemp>
        <Menu>
          {renderList()}
        </Menu>
    </StyleMainTemp> 
  )
}
export default MainTemp

const StyleMainTemp = styled.div`  
  display: flex;  
  justify-content: center;
  align-items: center; 
  width: 100%;
`;
const Menu = styled.ul`
  display: flex;
  flex-direction: column;
`;
const Elem = styled.li`
  display: flex;  
  color: black;
`;