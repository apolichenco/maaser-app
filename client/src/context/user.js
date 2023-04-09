import { createContext, useState, useEffect } from "react";

const UserContext = createContext(null);

const UserProvider = ({children}) => {
    const [user, setUser] = useState(false)
    const [userFavCharities, setUserFavCharities] = useState([])
    const [userIncomes, setUserIncomes] = useState([])
    const [userDonations, setUserDonations] = useState([])
    const [userTotalIncome, setUserTotalIncome] = useState("")
    const [userTotalDonations, setUserTotalDonations] = useState("")
    const [userTotalMaaserGive, setUserTotalMaaserGive] = useState("")

    function setAllData(data) {
        setUser(data)
        setUserFavCharities(data.fav_charities)
        setUserDonations(data.donations)
        setUserIncomes(data.incomes) 
        setUserTotalIncome(data.total_income)
        setUserTotalDonations(data.total_donated)
        setUserTotalMaaserGive(data.maaser_to_give)
    }

    useEffect(()=>  {
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

      function whenNewIncome(newIncome) {
            setUserIncomes([...userIncomes, newIncome])
            const newTotalIncome = parseFloat(userTotalIncome) + parseFloat(newIncome.amount)
            setUserTotalIncome(newTotalIncome)
            const figureOutMaaserLeft = (newTotalIncome * user.percentage) - parseFloat(userTotalDonations)
            setUserTotalMaaserGive(figureOutMaaserLeft.toFixed(2))
      }

      function whenNewDonation(newDonation) {
            setUserDonations([...userDonations, newDonation])
            const newTotalDonations = parseFloat(userTotalDonations) + parseFloat(newDonation.amount)
            setUserTotalDonations(newTotalDonations)
            const figureOutMaaserLeft = (parseFloat(userTotalIncome) * parseFloat(user.percentage)) - parseFloat(newTotalDonations)
            setUserTotalMaaserGive(figureOutMaaserLeft.toFixed(2))
      }

    //   function whenChangePercentage(newPercentage) {
    //     const figureOutMaaserLeft = (userTotalIncome * `${newPercentage}`) - userTotalDonations
    //     setUserTotalMaaserGive(figureOutMaaserLeft)
    //   }

      return (
        <UserContext.Provider value={ {
            user, setUser, setAllData,
            userFavCharities, addFavCharity, removeFavCharity, 
            userDonations, addDonation,
            userIncomes, addIncome,
            userTotalIncome, userTotalDonations, userTotalMaaserGive,
            whenNewIncome, whenNewDonation
        }}>
            {children}
        </UserContext.Provider>
    )

}

export { UserProvider, UserContext}