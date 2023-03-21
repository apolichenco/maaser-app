import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';

function SingleCharity({charityData, alreadyAFavorite}) {

    const {user, addFavCharity, removeFavCharity} = useContext(UserContext)

    const [likedOrNot, setLikedOrNot] = useState(false)

    useEffect(() => {
        if (alreadyAFavorite.includes(charityData.id)) {
            setLikedOrNot(false)
        }
        else {
            setLikedOrNot(true)
        }
    }, [])


    function favoriteACharity() {
            const newFavCharity = {
                charity_id: charityData.id,
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
                        addFavCharity(data)
                        setLikedOrNot(!likedOrNot)
                    })
                }
                else {
                    r.json().then((err) => console.log(err))
                }
            })
        }

        function deleteFavCharity() {
                fetch(`/fav_charities/${charityData.id}`, {method: "DELETE"})
                .then((r) => {
                    removeFavCharity(charityData.id)
                    setLikedOrNot(!likedOrNot)
                })
        }

    return (
        <div  key={charityData.id}>
            <h4>{charityData.name}</h4>
            <a href={charityData.link} target="_blank">{charityData.link}</a>
            <br></br>
            {likedOrNot ? <button onClick={favoriteACharity}>Like</button> : <button onClick={deleteFavCharity}>Remove off my list</button>}
        </div>
    );

}
export default SingleCharity;