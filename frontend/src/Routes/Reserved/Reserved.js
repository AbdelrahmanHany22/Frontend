import axios from 'axios'
import React, { useState } from 'react'
import './reserved.css'

export default function Reserved() {

    const [email, setEmail] = useState('')
    const [matches, setMatches] = useState(undefined)

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post('https://reservations-wc.vercel.app/api/v1/tickets/reserved', {"email":`${email}`})
        .then(res => {
            setMatches(res.data.data)
        })
    }

    let allMatches
    if(matches != undefined){
        allMatches = matches.map(object => {
            return(
                <div className='reserved-tickets'>
                    <div>Match Number: {object.matchNumber}</div>
                    <div>Category: {object.category}</div>
                    <div>Quantity: {object.quantity}</div>
                    <div>Price: {object.price}</div>
                </div>
            )
        }
    )}


    const handleChange = (event) => {
        let value = event.target.value
        setEmail(value)
    }

  return (
    <div>

        <form className='reserved-form' onSubmit={handleSubmit}>
            <label className='reserved-label'>
                Enter Your Email:
                <input name='email' type='email' required onChange={handleChange} value={email} />
            </label>
            <button className='reserved-button' type='submit'>Submit</button>
        </form>

        <div className='reserved-alltickets'>{allMatches}</div>

    </div>
  )
}
