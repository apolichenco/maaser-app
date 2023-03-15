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
                        <h5>{charity.charity.link}</h5>
                    </div>
                )
            })}
        </div>
    );

}
export default FavCharities;