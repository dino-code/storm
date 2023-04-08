// pages/Home/Home.jsx

import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import Calendar from '../../components/Calendar/Calendar'
import Input from '../../components/Input/Input'

const Home = () => {
  const [inputValue, setInputValue] = useState('')

  const handleButtonClick = () => {
    alert(`Input value: ${inputValue}`)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return
}

export default Home
