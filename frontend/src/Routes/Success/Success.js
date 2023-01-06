import axios from 'axios'
import React, {useState, useEffect} from 'react'
import './success.css'
import ticket from '../../Images/ticket.jpg'
import { useParams } from 'react-router-dom'
export default function Success() {
    const [details, setDetails] = useState({})

    const { matchno,category,quantity } = useParams()

    useEffect(() => {
        axios.get(`https://shop-wc-pwiq.vercel.app/api/v1/Shop/${matchno}`)   
        .then(res => {
             setDetails(res.data.data.data);
        })
    
    }, [])
    
    let utcObj = new Date(details.dateUtc)
    let utcToString = utcObj.toString()
    let split = utcToString.split(' ')
    let time = `${split[0]} ${split[1]} ${split[2]} ${split[3]} ${split[4]}`
       
  return (
    <div className='success-body'>

    <div className='success-title'>Ticket Bought Successfully</div>

    <div className='success-ticket'>

    <img className='ticket-background' src={ticket} />

        <div className='success-ticket-details'>
        <div className='fore success-id'>
                ID: {details.id}
        </div>

        <div className='fore'>
            {time}
        </div>

        <div className='ticket-teams fore'>
            <div>{details.awayTeam}</div>&nbsp;vs&nbsp;<div>{details.homeTeam}</div>
        </div>
        
        <div className='fore'>
            Location: {details.location}
        </div>

        <div className='fore'>
            Category: {category}
        </div>

        <div className='fore'>
            Quantity: {quantity}
        </div>
        </div>

    </div>

    </div>
  )


}
