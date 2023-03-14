import { createContext, useState, useEffect } from "react";

const UserContext = createContext(null);

const UserProvider = ({children}) => {
    const [user, setUser] = useState(false)

    useEffect (() => {
        fetch("/me")
        .then((r) => {
          if (r.ok) {
              r.json()
              .then((data) => setUser(data))
          }
          else {
              r.json().then((err) => setUser(false))
          }
      })
      }, [])

      return (
        <UserContext.Provider value={ {user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export { UserProvider, UserContext}