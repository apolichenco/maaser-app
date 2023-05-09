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
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    const editingHtml = <div className='editing'>
            <h5>Maaser Percentage: </h5><form onSubmit={handleSubmit}> 
                <input type="text" name="percentage" value={editedPercentage} onChange={(e) => setEditedPercentage(e.target.value)}/>
                <input type="submit" value="Save"/>
            </form>
        </div>

    return (
        <div className='account-box'>
            <div className='account-h5'><h5>Name: </h5><h6>{user.name}</h6></div>
            <div>   
                {editingStatus ? <div className='account-h5'><h5>Maaser Percentage: </h5><h6>{editedPercentage}%
                    <button onClick={handleEdit} className='emoji-button'>
                        <span>✏️</span>
                    </button>
                </h6></div>  : editingHtml }       
                
            </div>
 
            <button onClick={deleteUser} className='log-out-button'>Log Out</button>
            {errors.length > 0 ?  <div className='error-message'><h5>{errors}</h5></div> : null }  
        </div>
    );

}
export default AccountInfo;