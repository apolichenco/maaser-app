import React, {useContext, useState} from 'react';

function Account() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [percentage, setPercentage] = useState(10)
    const [errors, setErrors] = useState()
    const [typeOfLogIn, setTypeOfLogIn] = useState(false)

    // const {setUser} = useContext(UserContext)

    let allErrors = []
    if (errors) {
        allErrors = errors.map((err, index) => {
            return (<h5 key={index}>{err}</h5>)
        })
    }

    function handleSignUp(e) {
        e.preventDefault()
        fetch("/signup", {
            method:"POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({name, password}),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((newUser) => {
                    // setUser(newUser)
                    setErrors(["You are logged in!"])
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
                console.log(r)
                // r.json().then((newUser) => {
                    // setUser(newUser)
                    // setErrors(["You are logged in!"])
                //  })
            }
            else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    const signingUp =  <div>
            <h3>Already a user? Press <button onClick={(e) => setTypeOfLogIn(false)}>Log In</button></h3>
            <form onSubmit={handleSignUp}>
                <label>Username:</label><br></br>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} ></input><br></br>
                <label>Password:</label><br></br>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} ></input><br></br>
                <button type="submit">Sign Up</button>
            </form>
        </div>

    const loggingIn = <div>
            <h3>New user? Press <button onClick={(e) => setTypeOfLogIn(true)}>Sign Up</button></h3>
            <form onSubmit={handleLogIn}>
                <label>Username:</label><br></br>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} ></input><br></br>
                <label>Password:</label><br></br>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} ></input><br></br>
                {/* <label>Maaser Percentage:</label><br></br>
                <input type="text" id="percentage" value={percentage} onChange={(e) => setPercentage(e.target.value)} ></input><br></br> */}
                <button type="submit">Log In</button>
                {allErrors}
            </form>
        </div>

    return (
        <div>
            {typeOfLogIn ? signingUp : loggingIn}
        </div>
    )


    return (
        <div>
            
        </div>
    );

}
export default Account;