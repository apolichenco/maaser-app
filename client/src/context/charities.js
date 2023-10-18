import { createContext, useState, useEffect } from "react";

const CharityContext = createContext(null);

const CharityProvider = ({children}) => {

    const [charitiesList, setCharitiesList] = useState([])
    // const [favCharitiesList, setFavCharitiesList] = useState([])
    const [charityErrors, setCharityErrors] = useState([])

    function onNewCharity(newCharity) {
        setCharitiesList([...charitiesList, newCharity])
    }



    return (
        <CharityContext.Provider value={ { 
            charitiesList, setCharitiesList, onNewCharity,
            charityErrors, setCharityErrors
        }}>
            {children}
        </CharityContext.Provider>
    )

}

export { CharityProvider, CharityContext}