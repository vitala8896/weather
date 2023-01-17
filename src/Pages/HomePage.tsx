import styled from 'styled-components'
import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
// @ts-ignore
import Cities from '../components/Cities.tsx'
// @ts-ignore
import Header from "./../components/Header.tsx"
// @ts-ignore
import Form from '../components/Form.tsx'

export const HomePage = () => {
  const { citiesNames } =
  useSelector((state: any) => ({
    citiesNames: state.city.cities.names,
  }))
  const render = () => {
    return (
      <Page>
        <Header/> 
          <Form/>       
        <Cities />        
      </Page>
    )
  }
  useEffect( () => {  
    render()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [citiesNames]) 
    return (
      <>
        {render()}
      </>      
    )
}
const Page = styled.div`
  // width: 100%;
`