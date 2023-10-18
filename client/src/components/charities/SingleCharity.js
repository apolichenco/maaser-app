import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';
import './charity.css'

function SingleCharity({charityData, setErrors}) {

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
                user_id: user.id,
                name: charityData.name,
                link: charityData.link
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
                        setErrors([])
                    })
                }
                else {
                    r.json().then((err) => setErrors(err.errors))
                }
            })
        }

        function deleteFavCharity() {
            fetch(`/fav_charities/${favCharityId[0].id}`, {method: "DELETE"})
            .then((r) => { if (r.ok) {
                    removeFavCharity(favCharityId[0].id)
                    setLikedOrNot(!likedOrNot)
                    setErrors([])
            }
            else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }
        

    return (
        <div className='single-charity'>
            <div className='text-container'>
                <h4 className='charity-name'>{charityData.name}</h4>
                <a href={charityData.link} target="_blank" className='charity-link'>Click Here To Donate</a>
                <br></br>
                {likedOrNot ? <button onClick={favoriteACharity} className='charity-button-like'>❤</button> : <button onClick={deleteFavCharity} className='charity-button-unlike'>Remove off my list</button>}
            </div>  
        </div>

    );

}
export default SingleCharity;