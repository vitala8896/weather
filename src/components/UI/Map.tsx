import React, { useEffect } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { useSelector } from "react-redux"

const containerStyle = {
  width: '400px',
  height: '400px'
}

const SimpleMap = () => {
  const { activeCity } =
  useSelector((state: any) => ({
    activeCity: state.city.cities.activeCity,
  }))
  const render = () => {
    return (
      <LoadScript
      googleMapsApiKey="AIzaSyACwMZu0iVEK4bzMpVGnl2OD3CQI_qY23M"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: activeCity.data.city.coord.lat,
          lng: activeCity.data.city.coord.lon
        }}
        zoom={10}
      >
      </GoogleMap>
    </LoadScript>
    )
  }
  useEffect( () => {  
    render()
    // eslint-disable-next-line
  }, [activeCity.name]) 
  return (
    <>
      {render()}
    </>
    
  )
}

export default React.memo(SimpleMap)