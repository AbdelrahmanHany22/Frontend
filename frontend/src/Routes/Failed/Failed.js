import React from 'react'
import axios from 'axios'
import './failed.css'
export default function Failed() {

    axios.get('https://reservations-wc.vercel.app/api/v1/reservation/success')   
       
  return (
    <div className='failed-body'>Payment Failed</div>
  )
}
