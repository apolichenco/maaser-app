import React, {useContext, useState, useEffect} from 'react';
import './form.css'


function CharityForm() {


    const [newCharityName, setNewCharityName] = useState("")
    const [newCharityLink, setNewCharityLink] = useState("")

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
                })
            }
            else {
                r.json().then((err) => console.log(err))
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
        </div>
    )

}

export default CharityForm