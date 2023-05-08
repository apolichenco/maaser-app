import React, {useContext, useState, useEffect} from 'react';
import './form.css'


function CharityForm() {


    const [newCharityName, setNewCharityName] = useState("")
    const [newCharityLink, setNewCharityLink] = useState("")
    const [errors, setErrors] = useState([])

    let allErrors = []
    if (errors) {
        allErrors = errors.map((err, index) => {
            return (<h5 key={index}>{err}</h5>)
        })
    }


    function fetchForNewCharity(e) {
        e.preventDefault()
        const newCharity = {
            name: newCharityName,
            link: newCharityLink
        }
        fetch("/charities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(newCharity),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    console.log(data)
                    setErrors([])
                })
            }
            else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <div className='charity-form'>
            <form onSubmit={fetchForNewCharity}>
                <label className='big-label'>Enter a new charity:</label>
                    <br></br>
                <label>Name:</label>
                <input type="text" id="text" value={newCharityName} onChange={(e) => setNewCharityName(e.target.value)}></input>
                    <br></br>
                <label className='move-the-link'>Link:</label>
                <input type="text" id="text" value={newCharityLink} onChange={(e) => setNewCharityLink(e.target.value)}></input>
                    <br></br>
                <button type="submit">Submit</button>
            </form>
            {errors.length > 0 ?  <div className='error-message'>{allErrors}</div> : null }  
        </div>
    )

}

export default CharityForm