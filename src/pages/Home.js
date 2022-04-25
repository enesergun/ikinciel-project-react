import React from 'react'
import { useAuth } from '../context/AuthContext'

function Home() {
  const {deneme} = useAuth();
  
  return (
    <div onClick={deneme}>Home</div>
  )
}

export default Home