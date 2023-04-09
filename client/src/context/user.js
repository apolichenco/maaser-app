import { createContext, useState, useEffect } from "react";

const UserContext = createContext(null);

const UserProvider = ({children}) => {
    const [user, setUser] = useState(false)
    const [userFavCharities, setUserFavCharities] = useState([])
    const [userTotalIncome, setUserTotalIncome] = useState("")
    const [userTotalDonations, setUserTotalDonations] = useState("")
    const [userTotalMaaserGive, setUserTotalMaaserGive] = useState("")

    function setAllData(data) {
        setUser(data)
        setUserFavCharities(data.fav_charities)
        setUserTotalIncome(data.total_income)
        setUserTotalDonations(data.total_donated)
        setUserTotalMaaserGive(data.maaser_to_give)
    }

    function fetchMe (){
      fetch("/me")
      .then((r) => {
          if (r.ok) {
              r.json()
              .then((data) => {
                  setAllData(data)
              })
          }
          else {
              r.json().then((err) => setUser(false))
          }
      })
  }

    useEffect(()=>  {
      fetchMe() 
    }, [])

      function addFavCharity(newFavCharity) {
        setUserFavCharities([...userFavCharities, newFavCharity])
      }

      function removeFavCharity(deletedId) {
        setUserFavCharities(userFavCharities.filter((favCharity) => favCharity.id !== deletedId))
      }

      return (
        <UserContext.Provider value={ {
            user, setUser, setAllData, fetchMe,
            userFavCharities, addFavCharity, removeFavCharity, 
            userTotalIncome, userTotalDonations, userTotalMaaserGive
        }}>
            {children}
        </UserContext.Provider>
    )

}

export { UserProvider, UserContext}