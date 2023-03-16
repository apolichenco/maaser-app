import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';

function FavCharities() {

    const {favCharities} = useContext(UserContext)

    return (
        <div>
           {favCharities.map((charity) => {
                return (
                    <div key={charity.charity.id}>
                        <h4>{charity.charity.name}</h4>
                        <a href={charity.charity.link} target="_blank">{charity.charity.link}</a>
                    </div>
                )
            })}
        </div>
    );

}
export default FavCharities;