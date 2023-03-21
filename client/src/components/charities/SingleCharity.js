import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';

function SingleCharity({charityData}) {

    const {user} = useContext(UserContext)


    function favoriteACharity() {
            const newFavCharity = {
                charity_id: charityData.id,
                user_id: user.id
            }
            console.log(newFavCharity)
            fetch("/fav_charities", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify(newFavCharity),
            })
            .then((r) => {
                if (r.ok) {
                    r.json().then((data) => console.log(data))
                }
                else {
                    r.json().then((err) => console.log(err))
                }
            })
        }

    return (
        <div  key={charityData.id}>
            <h4>{charityData.name}</h4>
            <a href={charityData.link} target="_blank">{charityData.link}</a>
            <button></button>
            <button onClick={favoriteACharity}>Like</button>
        </div>
    );

}
export default SingleCharity;