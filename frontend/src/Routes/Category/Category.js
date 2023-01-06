import React, { useState, useEffect } from 'react'
import './category.css'

import { Link, useParams } from 'react-router-dom'

export default function Category() {

    const { matchno } = useParams()

    const [ match, setMatch ] = useState(null)
    const [ toggle, setToggle ] = useState(false)
    const [confirmdetails, setConfirmDetails] = useState('')
    let reserveObj

    useEffect(() => {
   
        fetch(`https://shop-wc-pwiq.vercel.app/api/v1/shop/${matchno}`)
        .then((response) => response.json())
        .then((data) => setMatch(data.data.data.availability));
      
    }, [])

    if(match !== null){

    function reserveJSON(category,price,quantity,matchnumber){

        reserveObj = {
            "email":'',
            "matchNumber":Number(matchnumber),
            "tickets":{
                "category":category,
                "quantity":quantity,
                "price":price
            },
            "card":{
                "number":'',
                "expirationMonth":'',
                "expirationYear":'',
                "cvc":''
            }
        }

            setConfirmDetails(
                <div className='category-confirm'>
                    You Are Buying a ticket of Category {category},
                     Price {price}, # of tickets {quantity},
                      Match # {matchnumber}
                      
                      
                    <div className='confirm-buttons'>
                       <Link to={'/Payment'} state={{ticket:{category,quantity,price,matchnumber}}} className='confirm-button'>Confirm</Link>
                        <div className='confirm-button' onClick={() => setToggle(false)}>Cancel</div>
                    </div>
                </div>
            )
            setToggle(true)

       
        

        
    }

    const categories = <>

    <div className='category-card'>

        <div className='category-card-title'>Category 1</div>
        <div className='category-card-tickets'>
        <div>Number of available tickets: </div>
        <div>{match.category1.available}</div>
        </div>
        <div className='category-card-price'>Price: {match.category1.price}</div>
        <div className='category-reserve'>
            <div className='category-reserve-buttons category-border' onClick={() => reserveJSON(1,match.category1.price,1,matchno)}>Reserve 1 ticket</div>
            <div className='category-reserve-buttons category-hover' onClick={() => reserveJSON(1,match.category1.price,2,matchno)}>Reserve 2 tickets</div>
        </div>

    </div>

    <div className='category-card'>

        <div className='category-card-title'>Category 2</div>
        <div className='category-card-tickets'>
        <div>Number of available tickets: </div>
        <div>{match.category2.available}</div>
        </div>        
        <div className='category-card-price'>Price: {match.category2.price}</div>
        <div className='category-reserve'>
            <div className='category-reserve-buttons category-border' onClick={() => reserveJSON(2,match.category2.price,1,matchno)}>Reserve 1 ticket</div>
            <div className='category-reserve-buttons category-hover' onClick={() => reserveJSON(2,match.category2.price,2,matchno)}>Reserve 2 tickets</div>
        </div>
    </div>

    <div  className='category-card'>

        <div className='category-card-title'>Category 3</div>
        <div className='category-card-tickets'>
        <div>Number of available tickets: </div>
        <div>{match.category3.available}</div>
        </div>        
        <div className='category-card-price'>Price: {match.category3.price}</div>
        <div className='category-reserve'>
            <div className='category-reserve-buttons category-border' onClick={() => reserveJSON(3,match.category3.price,1,matchno)}>Reserve 1 ticket</div>
            <div className='category-reserve-buttons category-hover' onClick={() => reserveJSON(3,match.category3.price,2,matchno)}>Reserve 2 tickets</div>
        </div>
    </div>
        
    </>

  return (
    <div className={`category-body ${ toggle && 'disable' } `}>

        { categories }
        { toggle && confirmdetails }

    </div>
  )
}}
