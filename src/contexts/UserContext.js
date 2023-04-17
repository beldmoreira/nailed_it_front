import useLocalStorage from "../hooks/useLocalStorage";
import { createContext } from "react";

const UserContext  = createContext();

const UserProvider = ({children}) => {
    const [userData, setUserData] = useLocalStorage("userData", {});

    return (
        <UserContext.Provider value={{userData, setUserData}}>{children}</UserContext.Provider>
    );
};

export {
    UserContext, UserProvider
}

