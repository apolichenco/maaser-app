import { createContext, useState, useEffect } from "react";

const UserContext = createContext(null);

const UserProvider = ({children}) => {
    const [user, setUser] = useState(false)
    const [favCharities, setFavCharities] = useState([])


    useEffect(() => {
           fetch("/me")
            .then((r) => {
                if (r.ok) {
                    r.json()
                    .then((data) => {
                        setUser(data)
                        setFavCharities(data.fav_charities)
                    })
                }
                else {
                    r.json().then((err) => setUser(false))
                }
            }) 
      }, [])

      function addFavCharity(newFavCharity) {
        setFavCharities([...favCharities, newFavCharity])
      }

      function removeFavCharity(deletedId) {
        setFavCharities(favCharities.filter((favCharity) => favCharity.id !== deletedId))
      }


      return (
        <UserContext.Provider value={ {user, setUser, favCharities, addFavCharity, removeFavCharity}}>
            {children}
        </UserContext.Provider>
    )

}

export { UserProvider, UserContext}