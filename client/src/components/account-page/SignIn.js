import React, {useContext, useState} from 'react';
import {useHistory} from "react-router-dom"
import { UserContext } from '../../context/user';
import './account.css'

function SignIn() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [percentage, setPercentage] = useState(10)
    const [errors, setErrors] = useState([])
    const [typeOfLogIn, setTypeOfLogIn] = useState(true)

    const {setAllData, setUser} = useContext(UserContext)

    let history = useHistory();

    let allErrors = []
    if (errors) {
        allErrors = errors.map((err, index) => {
            return (<h5 key={index}>{err}</h5>)
        })
    }
    
    function switchBetweenLogins() {
        setTypeOfLogIn(!typeOfLogIn)
        setErrors([])
    }

    function handleSignUp(e) {
        e.preventDefault()
        const newUser = {
            name: name,
            password: password,
            percentage: percentage
        }
        fetch("/signup", {
            method:"POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(newUser),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    history.push('/forms')
                    setUser(data)
                    setErrors([])
                })
            }
            else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    function handleLogIn(e) {
        e.preventDefault()
        fetch("/login", {
            method:"POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({name, password}),
        })
        .then((r) => {
            if (r.ok) {     
                r.json()
                .then((data) => {
                    history.push('/')
                    setAllData(data)
                    setErrors([])
                 })
            }
            else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    const signingUp =  <div>
            <h3>Already a user? Press <button className='change-page-button' onClick={switchBetweenLogins}>Log In</button></h3>
            <form onSubmit={handleSignUp}>
                <label>Username:</label><br></br>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} ></input><br></br>
                <label>Password:</label><br></br>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} ></input><br></br>
                <label>Maaser Percentage:</label><br></br>
                <input type="text" id="percentage" value={percentage} onChange={(e) => setPercentage(e.target.value)} ></input><br></br>
                <button type="submit">Sign Up</button>
            </form>
        </div>

    const loggingIn = <div>
            <h3>New user? Press <button className='change-page-button' onClick={switchBetweenLogins}>Sign Up</button></h3>
            <form onSubmit={handleLogIn}>
                <label>Username:</label><br></br>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} ></input><br></br>
                <label>Password:</label><br></br>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} ></input><br></br>
                <button type="submit">Log In</button>
            </form>
        </div>

    return (
        <div>
            <div className='login-box'>
                {typeOfLogIn ? signingUp : loggingIn}
            </div>  
            {errors.length > 0 ?  <div className='error-message'>{allErrors}</div> : null }  
        </div>

    )


}
export default SignIn;