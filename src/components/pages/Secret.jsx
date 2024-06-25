import React from 'react'
import { useNavigate } from 'react-router'

const Secret = () => {
  const navigate = useNavigate()

  const logOut = () =>{
    navigate('/register')
  }
  return (
    <div>
      <h1>Supuer Secret Oage</h1>
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}

export default Secret
