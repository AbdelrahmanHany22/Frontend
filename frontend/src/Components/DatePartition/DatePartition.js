import React, { useState, useEffect } from 'react'
import MatchDetails from '../MatchDetails/MatchDetails';
import './datepartitions.css'

export default function DatePartition({day,month}) {

  const [details, setDetails] = useState(null)

  useEffect(() => {
   
  fetch(`https://shop-wc-pwiq.vercel.app/api/v1/shop/date/2022-${month=='November'?11:12}-${day}`)
  .then((response) => response.json())
  .then((data) => setDetails(data.data.data));

  }, [])

  

 if(details !== null){ const matchdetails = details.map(item => {
    return <MatchDetails details={item} />
  })

  


  return (

    <div className='datepartition-body'>

      <div className='datepartition-date'>{day} {month}</div>
      <div className='datepartition-matchdetails'>{matchdetails}</div>

    </div>

  )
}}
