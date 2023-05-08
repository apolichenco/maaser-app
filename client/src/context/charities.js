import { createContext, useState, useEffect } from "react";

const CharityContext = createContext(null);

const CharityProvider = ({children}) => {

    const [charitiesList, setCharitiesList] = useState([])
    const [charityErrors, setCharityErrors] = useState([])


    useEffect(() => {
        fetch("/charities")
        .then((r) => {
            if (r.ok) {
                r.json().then((data) => setCharitiesList(data))
            }
            else {
                r.json().then((err) => setCharityErrors(err.errors))
            }
        })
    }, [])

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