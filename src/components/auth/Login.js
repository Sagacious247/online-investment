import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import visibilityIcon from '../../assets/asset/visibilityIcon.svg'
import login from '../../assets/login1.png'
import '../auth/AuthContainer.css'

function Login({onRegister, onReset}) {
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

         setIsLoading(true)

        try{
         const userCredential = await signInWithEmailAndPassword(auth, email, password)

         if(userCredential.user) {
            setIsLoading(false)
            toast.success("Welcome back")
            navigate("/")
         }
        } catch(error) {
         setIsLoading(false)
         toast.error(error.message)
        }
    }
  return (
    <div className='auth'>
    <div className='container'>
    <div className='image-container'>
       <img src={login} alt=''/>
     </div>
  
     <div className='form-container '>
     <form onSubmit={handleSubmit}>
      <div className='register-header'>
        <h1>Login</h1>
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

      <div className="passwordInputDiv">
     <label htmlFor="">Password</label>
     <input type={showPassword ? 'text' : "password"} 
     placeholder='Enter Password'
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     required 
     />

     <img 
     src={visibilityIcon}
     alt="show password" 
     className="showPassword" 
     onClick={() => setShowPassword((prevState) => !prevState)}/>
      </div>
      <button className="btn">
        Login
      </button>

      <div className="reset__link ">
        <Link to="#" className='--color-success' onClick={onReset}>
            Reset Password
         </Link>
      </div>
    </form >
    <p>Have an account? <Link onClick={onRegister} to="#">Register</Link></p>
     </div>    
     
      </div>
    </div>
  // </div>


    // <div className='auth'>
        
    //         <div className='img-container'>
    //           <img src="" alt='' />
    //         </div>

    //         <div className='form-container'>
    //             <div className='card'>
    //   <form  onSubmit={handleSubmit}>
    //   <h1>Login</h1>
    //     <div className="input">
    //     <label htmlFor="">Enter Email</label>
    //    <input type='email' 
    //    id='email'
    //    placeholder='Email' 
    //    value={email}
    //    onChange={(e) => setEmail(e.target.value)}
    //    required 
    //    />
    //     </div>

    //     <div className="passwordInputDiv">
    //    <label htmlFor="">Password</label>
    //    <input type={showPassword ? 'text' : "password"} 
    //    placeholder='Enter Password'
    //    value={password}
    //    onChange={(e) => setPassword(e.target.value)}
    //    required 
    //    />

    //    <img 
    //    src=''
    //    alt="show password" 
    //    className="showPassword" 
    //    onClick={() => setShowPassword((prevState) => !prevState)}/>
    //     </div>

    //     <button className="btn">
    //       Login
    //     </button>
        
    //     <div className="reset__link">
    //         <Link to="/reset">
    //         Reset Password
    //         </Link>
    //     </div>
    //   </form >
    //   <p>Don't have an account? <Link to="/register">Register</Link></p>
    //             </div>
    //         </div>
    // </div>
  )
}

export default Login
