import React, {useContext, useState, useEffect} from 'react';
import { CharityContext } from '../../context/charities';
import { UserContext } from '../../context/user';
import './form.css'


function CharityForm() {

    const [newCharityName, setNewCharityName] = useState("")
    const [newCharityLink, setNewCharityLink] = useState("")
    const [errors, setErrors] = useState([])

    const {onNewCharity} = useContext(CharityContext)
    const {user, addFavCharity} = useContext(UserContext)

    let allErrors = []
    if (errors) {
        allErrors = errors.map((err, index) => {
            return (<h5 key={index}>{err}</h5>)
        })
    }

    function succesfullForm() {
        setErrors(["Form filled out succesfully!"])
        setTimeout(function () {
            setErrors([]);
        }, 5000);
    }

    // function addToCharityList(data) {
    //         const newCharity = {
    //             name: data.name,
    //             link: data.link,

    //         }
    //         fetch("/charities", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json", 
    //             },
    //             body: JSON.stringify(newCharity),
    //         })
    //         .then((r) => {
    //             if (r.ok) {
    //                 r.json().then((data) => onNewCharity(data))
    //             }
    //             else {
    //                 r.json().then((err) => setErrors(err.errors))
    //             }
    //         })
    // }


    function fetchForNewCharity(e) {
        e.preventDefault()
        const newFavCharity = {
            name: newCharityName,
            link: newCharityLink, 
            user_id: user.id
        }
        fetch("/fav_charities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(newFavCharity),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    // addToCharityList(data)
                    addFavCharity(data)
                    succesfullForm()
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