import React from 'react'
import { Link } from 'react-router-dom'
import './matchdetails.css'
import flagsData from '../FlagsBar/flagsData'

export default function MatchDetails({details}) {
   
    let utcObj = new Date(details.dateUtc)
    let utcToString = utcObj.toString()
    let split = utcToString.split(' ')
    let time = split[4]

    let flags = {
        away:'',
        home:''
    }

    const temp = flagsData.forEach(obj => {
        if(obj.name == details.homeTeam){
            flags.home = obj.img
        }
        if(obj.name == details.awayTeam){
            flags.away = obj.img
        }
    })


  return (
    <div className='body'>

        <div className='upper'>

            <div className='matches'>
                <div className='match'><img  src={flags.away} width='15%'/>&nbsp;{details.awayTeam}</div>

                <div className='match'><img  src={flags.home} width='15%' />&nbsp;{details.homeTeam}</div>
            </div>

            <div className='date'>
                <div>Match {details.matchNumber}</div>
                <div>{time}</div>
                
            </div>

        </div>

        <div className='match-bot'>
            <div className='location'>{details.location}</div>
            <Link className='matchdetails-reserve' to={`/category/${details.matchNumber}`}>Reserve</Link>
        </div>
    </div>
  )
}
