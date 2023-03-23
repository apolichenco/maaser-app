import { createContext, useState, useEffect } from "react";

const UserContext = createContext(null);

const UserProvider = ({children}) => {
    const [user, setUser] = useState(false)
    const [userFavCharities, setUserFavCharities] = useState([])
    const [userIncomes, setUserIncomes] = useState([])
    const [userDonations, setUserDonations] = useState([])



    useEffect(() => {
           fetch("/me")
            .then((r) => {
                if (r.ok) {
                    r.json()
                    .then((data) => {
                        setUser(data)
                        setUserFavCharities(data.fav_charities)
                        setUserDonations(data.donations)
                        setUserIncomes(data.incomes)
                    })
                }
                else {
                    r.json().then((err) => setUser(false))
                }
            }) 
      }, [])

      function addFavCharity(newFavCharity) {
        setUserFavCharities([...userFavCharities, newFavCharity])
      }

      function removeFavCharity(deletedId) {
        setUserFavCharities(userFavCharities.filter((favCharity) => favCharity.id !== deletedId))
      }

      function addIncome(newIncome) {
        setUserIncomes([...userIncomes, newIncome])
      }

      function addDonation(newDonation) {
        setUserDonations([...userDonations, newDonation])
      }

      return (
        <UserContext.Provider value={ {
            user, setUser, 
            userFavCharities, addFavCharity, removeFavCharity, 
            userDonations, addDonation,
            userIncomes, addIncome
        }}>
            {children}
        </UserContext.Provider>
    )

}

export { UserProvider, UserContext}