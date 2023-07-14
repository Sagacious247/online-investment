import React, { useEffect, useRef, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import countryData from '../CountryData.json'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth, db} from '../../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import visibilityIcon from '../../assets/asset/visibilityIcon.svg'
import register from '../../assets/register1.png'
import Loader from '../Loader'
import './AuthContainer.css'
import {GoPrimitiveDot} from 'react-icons/go'
import {FaCheck} from 'react-icons/fa'

function Register({onLogin}) {
  const nameInputRef = useRef(null)
    const [showPassword, setShowPassword] = useState(false)
    const [showIndicator, setShowIndicator] = useState(false)

    const [passLetter, setPassLetter] = useState(false)
    const [passNumber, setPassNumber] = useState(false)
    const [passChar, setPassChar] = useState(false)
    const [passLength, setPassLength] = useState(false)

    const [passComplete, setPassComplete] = useState(false)

    const [countries, setCountries] = useState(countryData)
    console.log("countries", countries)

    const [searchCode, setSearchCode] = useState()
    console.log("searchCode", searchCode)

    const searchCountry = countries.find((obj) => {
      if(obj.code === searchCode) {
        return true;
      }
      return false;
    });
    console.log("searchCountry", searchCountry)

    const navigate = useNavigate()

    useEffect(() => {
       nameInputRef.current.focus()
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const showPasswordIndicator = () => {
      setShowIndicator(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
     
        if(password !== cPassword) {
          toast.error("password do not match")
          return 
        }
        setIsLoading(true)

        try{
          const userCredential = await createUserWithEmailAndPassword(auth, email, password)
          
          const user = userCredential.user

          updateProfile(auth.currentUser, {
            displayName: name
          })

          await setDoc(doc(db, 'users', user.uid), {
            displayName: name,
            email: email,
            timestamp: new Date().toString()
          })
          setIsLoading(false)
          toast.success("Registration is successful.")
          navigate("/login")

        }catch(error) {
         setIsLoading(false)
         toast.error(error.message)
        }
       
    }

    useEffect(() => {
      if(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        setPassLetter(true)
      } else {
        setPassLetter(false)
      }
      if(password.match(/([0-9])/)) {
        setPassNumber(true)
      } else {
        setPassNumber(false)
      }
      if(password.match((/([!,%,&,@,#,$,^,*,_,~])/))) {
        setPassChar(true)
      } else {
        setPassChar(false)
      }
      if(password.length > 7) {
        setPassLength(true)
      } else {
        setPassLength(false)
      }
      if(passLetter && passLength && passChar && passNumber) {
        setPassComplete(true)
      } else {
        setPassComplete(false)
      }
    }, [password, passLetter, passNumber, passChar, passLength])
  return (
    <div className='auth'>
      <div className='container'>
        {isLoading && <Loader/>}
        {/* <div className='card'> */}
    
       <div className='form-container'>
       <form onSubmit={handleSubmit}>
        <div className='register-header'>
          <h1>Register</h1>
        </div>
      <div className="input">
        <label htmlFor="">Enter Name</label>
       <input type='text' 
       ref={nameInputRef}
       id='name'
       placeholder='Name' 
       value={name}
       onChange={(e) => setName(e.target.value)}
       required 
       />
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
       onFocus={showPasswordIndicator}
       />

       <img 
       src={visibilityIcon}
       alt="show password" 
       className="showPassword" 
       onClick={() => setShowPassword((prevState) => !prevState)}/>
        </div>

       
        <div className="input">
        <label htmlFor="">Country</label>
        <select 
        value={searchCode}
        onChange={(e) => setSearchCode(e.target.value)}
        >
          <option value="">
            Select Country...
          </option>
          {
            countries.map((item) => {
              return (
                <option key={uuidv4()} value={item.code}>
                  {item.name}
                </option>
              )
            })
          }
        </select>
        </div>

<div className=''>
<label htmlFor="">Phone Number</label>
  <div className="phoneSection__content">
        <input className='code__number' type='tel' 
       placeholder='Code' 
       value={searchCountry && searchCountry.dial_code  || ""}
       required 
       />

<input className='phone__number' type='tel' 
       placeholder='Phone' 
       id='phone'
       value={phone}
       onChange={(e) => setPhone(e.target.value)}
       required 
       />

     </div>
        </div>
        <button className="btn">
          Register
        </button>
      <p>Have an account? <Link to="#" onClick={onLogin}>Login</Link></p>

      <div className={showIndicator ? "show-indicator" : 'hide-indicator'}>
        <ul style={{textDecoration: "none", padding: "1rem"}} className='--bg-grey'>
          <p style={{fontSize: "14px"}}>Password Strength Indicator</p>
          <li className={passLetter ? 'green' : "red"}>
            <span >
            {passLetter ? <FaCheck/> : <GoPrimitiveDot/>}
            &nbsp; Lowercase & Uppercase
            </span>
          </li>

          <li className={passNumber ? 'green' : "red"}>
            <span >
            {passNumber ? <FaCheck/> : <GoPrimitiveDot/>}
            &nbsp; Numbers (0-9)
            </span>
          </li>

          <li className={passChar ? 'green' : "red"}>
            <span> 
            {passChar? <FaCheck/> : <GoPrimitiveDot/>}
            &nbsp; Special Character (!@#$%^&*)
            </span>
          </li>

          <li className={passLength ? 'green' : "red"}>
            <span >
            {passLength ? <FaCheck/> : <GoPrimitiveDot/>}
            <GoPrimitiveDot/>
            &nbsp; At least 8 Character
            </span>
          </li>
        </ul>
      </div>
      </form >
       </div>    
       <div className='image-container'>
         <img src={register} alt=''/>
       </div>
        </div>
      </div>
    // </div>
  )
}

export default Register
