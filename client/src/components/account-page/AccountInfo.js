import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';
import './account.css'


function AccountInfo() {
    
    const {user, setAllData} = useContext(UserContext)

    const [editedPercentage, setEditedPercentage] = useState(user.percentage) 
    const [editingStatus, setEditingStatus] = useState(true)
    const [errors, setErrors] = useState([])

    function deleteUser() {
        fetch("/logout", {method: "DELETE"})
        .then((r) => {
            setAllData(false)
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
                .then((updatedUser) => {
                    setAllData(updatedUser)
                    setEditingStatus(true)
                    setErrors([])
                })
            }
            else {
                r.json().then((err) => console.log(err.errors))
            }
        })
    }

    const editingHtml = <div className='editing'>
            <h5>Maaser Percentage:</h5><form onSubmit={handleSubmit}> 
                <input type="text" name="percentage" value={editedPercentage} onChange={(e) => setEditedPercentage(e.target.value)}/>
                <input type="submit" value="Save"/>
            </form>
        </div>

    return (
        <div className='account-box'>
            <h5>Name: <h6>{user.name}</h6></h5>
            <div>   
                {editingStatus ? <h5>Maaser Percentage: <h6>{editedPercentage}%
                    <button onClick={handleEdit} className='emoji-button'>
                        <span>✏️</span>
                    </button>
                </h6></h5>  : editingHtml }       
                
            </div>
 
            <button onClick={deleteUser} className='log-out-button'>Log Out</button>
        </div>
    );

}
export default AccountInfo;