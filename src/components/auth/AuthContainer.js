import {useState} from 'react'
import Reset from './Reset'
import Register from './Register'
import Login from './Login'

function AuthContainer() {
  const [register, setRegister] = useState(false)
  const [login, setLogin] = useState(true)
  const [reset, setReset] = useState(false)

  const handleRegister = () => {
     setLogin(false)
     setRegister(true)
     setReset(false)
  }

  const handleReset = () => {
    setLogin(false)
    setReset(true)
    setRegister(false)
  }

  const handleLogin = () => {
    setReset(false)
    setLogin(true)
    setRegister(false)
  }

  return (
    <div>
      {register && <Register onLogin={handleLogin}/>}
      {login && <Login onRegister={handleRegister} onReset={handleReset}/>}
      {reset && <Reset  onLogin={handleLogin}/>}
    </div>
  )
}

export default AuthContainer
