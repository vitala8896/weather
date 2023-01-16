import React from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector } from "react-redux"
// @ts-ignore
import Cities from '../components/Cities.tsx'
// @ts-ignore
import Header from "./../components/Header.tsx"

export const HomePage = () => {
  const { name } =
  useSelector((state: any) => ({
    name: state.city.cities.activeCity.name,
  }))
  const render = () => {
    return (
      <Page>
        <Header/>        
        <Cities />        
      </Page>
    )
  }
  useEffect( () => {  
    render()
  }, [name]) 
    return (
      <>
        {render()}
      </>      
    )
}
const Page = styled.div`
  // width: 100%;
`