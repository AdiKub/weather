import React from 'react'
import WeatherDetail from "../components/WeatherDetail";
import WeatherTitleWithForm from "../components/WeatherTitleWithForm";
import '../assets/main.scss'

const Home = () => {
  return (
    <div>
      <WeatherTitleWithForm />
      <WeatherDetail />
    </div>
  )
}

export default Home