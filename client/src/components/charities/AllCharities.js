import React, {useContext, useState, useEffect} from 'react';

function AllCharities() {

    const [charitiesList, setCharitiesList] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch("/charities")
        .then((r) => {
            if (r.ok) {
                r.json().then((data) => setCharitiesList(data))
            }
            else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }, [])


    return (
        <div>
            {charitiesList.map((charity) => {
                return (
                    <div key={charity.id}>
                        <h4>{charity.name}</h4>
                        <a href={charity.link} target="_blank">{charity.link}</a>
                    </div>
                )
            })}
        </div>
    );

}
export default AllCharities;