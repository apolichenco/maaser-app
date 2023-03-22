import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';

function SingleCharity({charityData}) {

    const {user, addFavCharity, removeFavCharity, userFavCharities} = useContext(UserContext)

    const [likedOrNot, setLikedOrNot] = useState(false)
    const [favCharityId, setFavCharityId] = useState([])


    useEffect(() => {
        setFavCharityId(userFavCharities.filter((favCharity) => favCharity.charity.id === charityData.id))
        if (favCharityId.length == 1) {
            setLikedOrNot(false)
        }
        else {
            setLikedOrNot(true)
        }
    }, [likedOrNot])


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
                        setLikedOrNot(false)
                    })
                }
                else {
                    r.json().then((err) => console.log(err))
                }
            })
        }

        function deleteFavCharity() {
                fetch(`/fav_charities/${favCharityId[0].id}`, {method: "DELETE"})
                .then((r) => {
                    removeFavCharity(favCharityId[0].id)
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