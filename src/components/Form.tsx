import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import styled from 'styled-components'
// @ts-ignore
import close from "./../Assets/Images/close.jpg"
// @ts-ignore
import { setReduxAddCityName, setReduxFormClose } from './../store/citySlice.tsx'
// @ts-ignore
import { setLocalCitiesNames, getLocalCitiesName } from '../services/API/city.tsx'


const Form = () => {
  const dispatch = useDispatch()
  let history = useHistory()
  const { activeCity, form, citiesNames } = useSelector((state: any) => ({
    activeCity: state.city.cities.activeCity,
    form: state.city.form.open,
    citiesNames: state.city.cities.names
  }))
  const { register, handleSubmit, formState: { errors },
  } = useForm({
    defaultValues: {
      cityName: activeCity.name,
      form: form,
      citiesNames: citiesNames    
    }
  })      
  const [cityName, setCityName] = useState('')
  const cityHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    setCityName(value)
  }
  const addCity = () => {
    const newArr = getLocalCitiesName()
    newArr.push(cityName)
    setLocalCitiesNames(newArr)  
    return dispatch(setReduxAddCityName(newArr)) 
  }
  const render = () => {
    return (
      <StyleForm className="slide-in-top" style={{display: form}}>
      <FormCity onSubmit={handleSubmit(data => {
        addCity()
        dispatch(setReduxFormClose())        
        history.push('/')
      })        
      }>
        <Header>
          <Title>Add city</Title>
          <Close src={close} onClick={()=>{
            dispatch(setReduxFormClose())
          }}/> 
        </Header>        
        <Input value={cityName} type="text" {...register("cityName", {required: true, minLength: 2, maxLength: 30})} placeholder="City name (Lviv, Kyiv, Odesa, Rivne, Chernivtsi, Kharkiv, Dnipro, Vinnytsia, Chernihiv, Poltava" onChange={e => {cityHandle(e)}}/>
        {errors.cityName && "min length: 2, maxLength: 30"}
        <Btns>
          <Button type="submit">Add</Button>
          <Button type="button"
          onClick={() => {            
            history.push('/')
          }} 
          >Close</Button> 
        </Btns>       
      </FormCity>
    </StyleForm>
    )
  }
  useEffect( () => {  
    render()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]) 
  return (
    <>
      {render()}
    </>    
  )
}

export default Form

const StyleForm = styled.div`
  position: fixed;  
  top: 0;  
  display: flex;
  justify-content: center; 
  align-items: center;  
  height: 100vh;
  width: 100%;
  background: rgba(0%, 53%, 87%, .18);  
  &.slide-in-top {
    -webkit-animation: slide-in-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            animation: slide-in-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }   
  @-webkit-keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
              transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
              transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
  }
`
const FormCity = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #15172b;
  border-radius: 20px;
  box-sizing: border-box;
  height: auto;
  padding: 20px;
  width: 70%;
  & {
    color: red;
  }
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`
const Title = styled.div`
  color: #eee;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600; 
  
`
const Close = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer
`
const Input = styled.input`
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 50px;
  outline: 0;
  padding: 0 20px 0;
  margin-bottom: 10px;
  width: 100%;  
`
const Button = styled.button`
  background-color: #08d;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 10px;
  text-align: center;
  width: 49%;
  :active {
    background-color: #06b;
  }
`
const Btns = styled.div`
  display: flex;
  justify-content: space-between;  
`