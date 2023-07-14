import React from 'react'
import  ReactDOM  from 'react-dom'
import './Loader.css'
import loaderImg from '../assets/loader.gif'

function Loader() {
  return ReactDOM.createPortal (
    <div className='wrapper'>
     <div className='loader'>
      <img src={loaderImg} alt=''/>
     </div>
    </div>,
    document.getElementById('loader')
  )
}

export default Loader
