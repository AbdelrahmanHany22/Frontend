import React, { useState,useRef } from 'react'
import axios from 'axios'
import Captcha from "react-google-recaptcha"
import { useLocation } from 'react-router-dom';
import './payment.css'
import DropdownMonth from './DropdownMonth';
import DropdownYear from './DropdownYear';

export default function Payment() {
    
    const [loading, setLoading] = useState(false);
    const captchaRef = useRef(null)
    const [contactInfo, setContactInfo] = useState({
        email: "",
        number: "",
        name: "",
        cvc: "",
        month: "",
        year: "",
      });

    const location = useLocation()

    const ticket = location.state.ticket;

    const numberInputKeyDown = (event) => {
        const eventCode = event.code.toLowerCase();
        if (!(event.code !== null
        && (eventCode.includes("digit")
            || eventCode.includes("arrow")
            || eventCode.includes("home")
            || eventCode.includes("end")
            || eventCode.includes("slash")
            || eventCode.includes("backspace") 
            || (eventCode.includes("numpad") && eventCode.length === 7)))
        ) {
        event.preventDefault();
        }
    };

    

    const handleCardDisplay = () => {
        const rawText = [...contactInfo.number.split(' ').join('')] // Remove old space
        const creditCard = [] // Create card as array
        rawText.forEach((t, i) => {
            
            if (i % 4 === 0 && i !== 0){
                creditCard.push(' ')
            }
            creditCard.push(t)
        })
        return creditCard.join('')
    }

      const handleSubmit = async (e) =>{

        const postObj = {
            "email":`${contactInfo.email}`,
            "matchNumber":Number(ticket.matchnumber),
            "tickets":{
                "category":Number(ticket.category),
                "quantity":Number(ticket.quantity),
                "price":Number(ticket.price)
            },
            "card":{
                "number":handleCardDisplay(),
                "expirationMonth":Number(contactInfo.month),
                "expirationYear":Number(contactInfo.year),
                "cvc":`${contactInfo.cvc}`
            }
        }

        e.preventDefault();

        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
        await axios.post('https://security-wc.vercel.app/api/v1/security/captcha', {token})
            .then(res =>  {
            if(res.data == 'Human'){
                    setLoading(true)
                    axios.post("https://reservations-wc.vercel.app//api/v1/reservation/", postObj)
                    .then(res => {
                        setContactInfo({ email:'', number:'', name:'', cvc:'', month:'', year:''});
                        window.location.replace(`/success/${ticket.matchnumber}/${ticket.category}/${ticket.quantity}`)

                    })
                    .catch((error) => {
                        window.location.replace('/failed')
                    })
            }else{
                alert('confirm captcha')
            }
            }
            )
        .catch((error) => {
        console.log(error);
        })
        }

      const handleChange = (event) => {

        let name = event.target.name
        let value = event.target.value

        if(name == 'cvc'){
            value = value.slice(0,3)
        }
        if(name == 'month'){
            value = value.slice(0,2)
        }
        if(name == 'year'){
            value = value.slice(0,4)
        }
        if(value < 0){
                return
        }
        if(name == 'number'){
            value = value.slice(0,16)
            
        }

        setContactInfo({ ...contactInfo, [name]: value });

      };

  return (
    <div className='payment-body'>

        <div className='payment-details'>
            <div>Ticket Details:</div>
            <div className='payment-details-item'><div>Category:</div> {ticket.category}</div>
            <div className='payment-details-item'><div>Quantity:</div> {ticket.quantity}</div>
            <div className='payment-details-item'><div>Price:</div> {ticket.price}</div>
            <div className='payment-details-item'><div>Match Number:</div> {ticket.matchnumber}</div>
        </div>

        <form className='payment-form' onSubmit={handleSubmit}>

            <label className='label'>
                Enter Your Email:
                <input className='input' type='email' name='email' onChange={handleChange} required value={contactInfo.email}/>
            </label>
            Card Details:
            <label className='label'>
                Name On Card:
                <input className='input' type='text' name='name' onChange={handleChange} required value={contactInfo.name} />
            </label>
            <label className='label'>
                Card Number:
                <input className='input' type='text' name='number' onChange={handleChange} onKeyDown={numberInputKeyDown} required value={contactInfo.number} placeholder={"Card Number"}/>
            </label>

            Expiration Month/Year:
            <div className='payment-dropdowns'>
                <DropdownMonth month={contactInfo.month} setContactInfo={setContactInfo} contactInfo={contactInfo}/>
                <DropdownYear year={contactInfo.year} setContactInfo={setContactInfo} contactInfo={contactInfo}/>
            </div>

            <label className='label'>
                CVC:
                <input className='payment-cvc input' type='text' name='cvc' onChange={handleChange} onKeyDown={numberInputKeyDown} required value={contactInfo.cvc} placeholder={"xxx"}/>
            </label>

            <Captcha
                sitekey="6LdfxqgjAAAAAB2djzD-DIR7xBVp3xK-2idT17dU"
                ref={captchaRef}
            /> 

            <button className='payment-submit' type='submit'>Submit</button>       
        </form>

        {loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : <div></div> }
    </div>
  )
}
