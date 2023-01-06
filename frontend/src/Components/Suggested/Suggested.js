import axios from 'axios'
import React, { useEffect,useState } from 'react'
import MatchDetails from '../MatchDetails/MatchDetails'
import './suggested.css'

export default function Suggested() {
    const [FirstDetails, setFirstDetails] = useState(undefined)
    const [SecondDetails, setSecondDetails] = useState(undefined)
    const [ThirdDetails, setThirdDetails] = useState(undefined)
    const [suggestions, setSuggestions] = useState(undefined)
  

    useEffect(() => {

        async function fetchData(){
            
            await axios.get('https://analytics-wc.vercel.app/api/v1/analysis/rank')
                    .then(res => {setSuggestions(res.data.data)})
                    
        }
      fetchData()
        
    }, [])

    useEffect(() => {

        if(suggestions != undefined){
            axios.get(`https://shop-wc-pwiq.vercel.app/api/v1/shop/team/${suggestions.FirstTeam}`)
            .then(res => setFirstDetails(res.data.data.data))
            axios.get(`https://shop-wc-pwiq.vercel.app/api/v1/shop/team/${suggestions.SecondTeam}`)
            .then(res => setSecondDetails(res.data.data.data))
            axios.get(`https://shop-wc-pwiq.vercel.app/api/v1/shop/team/${suggestions.ThirdTeam}`)
            .then(res => setThirdDetails(res.data.data.data))
    }

    }, [suggestions])
    

    if((FirstDetails != undefined) && (SecondDetails != undefined) && (ThirdDetails != undefined)){

        const firstMatch =  <MatchDetails details={FirstDetails[0]} />
        const secondMatch =  <MatchDetails details={SecondDetails[0]} />
        const thirdMatch =  <MatchDetails details={ThirdDetails[0]} />           
  return (
    <div className='suggested-body'>


      <div className='suggested-match'>
        {suggestions.FirstTeam}
        {firstMatch}
      </div>

      <div className='suggested-secondrow'>

        <div className='suggested-match'>
          {suggestions.SecondTeam}
          {secondMatch}
        </div>
        <div className='suggested-match'>
          {suggestions.ThirdTeam}
          {thirdMatch}
        </div>

      </div>

    </div>
  )
}}


