import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import forgot from '../../assets/forgot1.png'
import '../auth/AuthContainer.css'

function Reset({onLogin}) {
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {

    }
  return (
    <div className='auth'>
    <div className='container'>
  
     <div className='form-container '>
     <form onSubmit={handleSubmit}>
      <div className='register-header'>
        <h1>Reset Password</h1>
      </div>

      <div className="input">
      <label htmlFor="">Enter Email</label>
     <input type='email' 
     id='email'
     placeholder='Email' 
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     required 
     />
      </div>
    </form >
    <p>Have an account? <Link to="#" onClick={onLogin}>Login</Link></p>
     </div>  

     <div className='image-container'>
       <img src={forgot} alt=''/>
     </div>  
     
      </div>
    </div>
  )
}

export default Reset
