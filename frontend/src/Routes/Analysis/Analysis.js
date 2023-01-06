import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './analysis.css'

export default function Analysis() {

    const [data, setData] = useState(undefined)

    useEffect(() => {
      axios.get('https://analytics-wc.vercel.app/api/v1/analysis/percentages')
      .then(res => setData(res.data.data))

    }, [])

    if(data != undefined){
    
  return (
    <div className='analysis-body'>

    <div className='analysis-header'> Ticket Analysis</div>

        <div className='analysis-row'>
            <div className='analysis-title'>Max Requests</div>
            <div className='analysis-number'>{data.Max}</div>
        </div>
        <div className='analysis-row'>
            <div className='analysis-title'>Pending Percentage</div>
            <div className='analysis-number'>{data.PendingPercentage}%</div>
        </div>
        <div className='analysis-row'>
            <div className='analysis-title'>Reserved Percentage</div>
            <div className='analysis-number'>{data.ReservedPercentage}%</div>
        </div>
        <div className='analysis-row'>
            <div className='analysis-title'>Cancelled Percentage</div>
            <div className='analysis-number'>{data.CancelledPercentage}%</div>
        </div>

    </div>
  )
}}
