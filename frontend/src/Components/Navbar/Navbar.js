import React from 'react'
import './navbar.css'
import logo from '../../Images/logo.jpg'
import home from '../../Images/house-chimney.png'
import reserved from '../../Images/reserved.png'
import analysis from '../../Images/analysis.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar-body'>
      <img src={logo} className='navbar-logo' />
      <div className='navbar-links'>
        <Link className='navbar-home' to={'/'}>{<img src={home} width='70%'  />}</Link>
        <Link className='navbar-reserve' to={'/Reserved'}>{<img src={reserved} width='100%'  />}</Link>
        <Link className='navbar-reserve' to={'/analysis'}>{<img src={analysis} width='50%'  />}</Link>
      </div>
    </div>
  )
}
