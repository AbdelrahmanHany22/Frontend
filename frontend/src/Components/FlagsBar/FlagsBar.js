import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';
import './flagsbar.css'
import countries1 from './flagsData';
import MatchDetails from '../MatchDetails/MatchDetails';

export default function FlagsBar() {

     const [matches, setMatches] = useState([])

    const slide1 = countries1.map(country => {

        return(
           <img
              className='flag-img'
              src={country.img}
              width='60%'
              onClick={() => {getMatch(country.name)}}
            />
           
        )
    })  

    function getMatch(name){

        console.log(name);

    axios.get(`https://shop-wc-pwiq.vercel.app/api/v1/shop/team/${name}`)
    .then(res => setMatches(res.data.data.data))
  
    }

    

    if(matches != []){
       const matchDiv = matches.map(country => {
        return <MatchDetails details={country} />
            
       
       })
    

   
    const responsive = {
        0: { items: 8 }
        
    };

  return (
    <div >
    
    <div className='carousel' >
    <AliceCarousel  responsive={responsive} items={slide1} />
    </div>
    <div className='match-details'>{matchDiv}</div>

    </div>        
  )
}}
