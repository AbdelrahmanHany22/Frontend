import React, { useState,useEffect } from 'react'
import './shop.css'
import groups from '../../Images/groups.jpg'
import DatePartition from '../../Components/DatePartition/DatePartition'
import FlagsBar from '../../Components/FlagsBar/FlagsBar'
import MatchDetails from '../../Components/MatchDetails/MatchDetails'
import Suggested from '../../Components/Suggested/Suggested'

export default function Shop() {

  const [allMatches, setAllMatches] = useState(undefined)

  useEffect(() => {
    
  fetch(`https://shop-wc-pwiq.vercel.app/api/v1/shop/`)
  .then((response) => response.json())
  .then((data) => setAllMatches(data.data.data));
  
  }, [])

  let matches

  if(allMatches != undefined){ 
    matches = allMatches.map(object => {
    return (
        
        <MatchDetails details={object} />
    )
  })
  }
  

  const groupStages = <>
  <DatePartition day='20' month='November' />

  <DatePartition day='21' month='November' />

  <DatePartition day='22' month='November' />

  <DatePartition day='23' month='November' />

  <DatePartition day='24' month='November' />

  <DatePartition day='25' month='November' />

  <DatePartition day='26' month='November' />

  <DatePartition day='27' month='November' />

  <DatePartition day='28' month='November' />

  <DatePartition day='29' month='November' />

  <DatePartition day='30' month='November' />
  
  <DatePartition day='01' month='December' />
  
  <DatePartition day='02' month='December' />
</>

const roundStages = <>
<DatePartition day='03' month='December' /> 
<DatePartition day='04' month='December' /> 
<DatePartition day='05' month='December' /> 
<DatePartition day='06' month='December' /> 
</>

const quarterStages = <>
<DatePartition day='09' month='December' /> 
<DatePartition day='10' month='December'/> 
</>

const semiStages = <>
<DatePartition day='13' month='December' /> 
<DatePartition day='14' month='December' /> 
</>

const finalStages = <>
<DatePartition day='17' month='December' /> 
<DatePartition day='18' month='December' /> 
</>

  const [group, setGroup] = useState('group')

  function Matches(group){
    
    if(group == null){
      return null
    }
    else if(group.group == 'group'){
      return(
         groupStages
      )
    }
    else if(group.group == 'round'){
      return(
        roundStages
      )
    }
    else if(group.group == 'quarter'){
      return(
        quarterStages
      )
    }
    else if(group.group == 'semi'){
      return(
        semiStages
      )
    }
    else if(group.group == 'final'){
      return(
        finalStages
      )
    }
    else if(group.group == 'all'){
      return(
        matches
      )
    }
  }

 

    
    
    
  

  return (
    <div className='shop-body'>

      <img src={groups} className='shop-img'/>

      <FlagsBar />
      
      <div className='shop-matchstages'>Suggested Matches</div>

      <Suggested />

      <div className='shop-matchstages'>Match Stages</div>

      <div className='shop-buttons'>

        <div className={`shop-button ${group == 'group' ? 'shop-button-border' : ''}`} onClick={() => {setGroup('group')}}>Group Stages</div>
        <div className={`shop-button ${group == 'round' ? 'shop-button-border' : ''}`}  onClick={() => {setGroup('round')}}>Round of 16</div>
        <div  className={`shop-button ${group == 'quarter' ? 'shop-button-border' : ''}`} onClick={() => {setGroup('quarter')}}>Quarter-Finals</div>
        <div className={`shop-button ${group == 'semi' ? 'shop-button-border' : ''}`}  onClick={() => {setGroup('semi')}}>Semi-Finals</div>
        <div  className={`shop-button ${group == 'final' ? 'shop-button-border' : ''}`} onClick={() => {setGroup('final')}}>3rd PLace & Final</div>
        <div  className={`shop-button ${group == 'all' ? 'shop-button-border' : ''}`} onClick={() => {setGroup('all')}}>All Matches</div>

      </div>

          <div className={group == 'all' ? 'all' :  ''}>
            {group == 'all' ? <div className='shop-title'>All Matches</div> : <></>}
            <Matches group={group}/>
          </div>
          
    
    </div>
  )
}
