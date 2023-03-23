import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';


function AccountInfo() {
    
    const {user, setUser} = useContext(UserContext)

    const [editedPercentage, setEditedPercentage] = useState(user.percentage) 
    const [editingStatus, setEditingStatus] = useState(true)
    const [errors, setErrors] = useState([])

    function deleteUser() {
        fetch("/logout", {method: "DELETE"})
        .then((r) => {
            setUser(false)
        })
    }

    function handleEdit() {
        setEditingStatus(!editingStatus)
      }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/users/${user.id}` , {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json" ,
            },
            body: JSON.stringify({
                percentage: editedPercentage
            }),
        })
        .then((r) => {
            if (r.ok) {
                r.json()
                .then((updatedListing) => {
                    setEditedPercentage(updatedListing.percentage)
                    setEditingStatus(true)
                    setErrors([])
                })
            }
            else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    const editingHtml = <div>
            <form onSubmit={handleSubmit}> 
                <input type="text" name="percentage" value={editedPercentage} onChange={(e) => setEditedPercentage(e.target.value)}/>
                <input type="submit" value="Save"/>
            </form>
        </div>

    return (
        <div>
            <h5>Name: {user.name}</h5>
            <div>   
                {editingStatus ? <h5>Maaser Percentage: {editedPercentage}% 
                    <button onClick={handleEdit}>
                        <span>✏️</span>
                    </button>
                </h5>  : editingHtml }       
                
            </div>
 
            <button onClick={deleteUser} style={{margin: 15}}>Log Out</button>
        </div>
    );

}
export default AccountInfo;