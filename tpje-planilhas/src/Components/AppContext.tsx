import { createContext, useEffect, useState } from "react";
import { getStorage } from "../Services/Storage";

interface IAppContext {
    isLogged: boolean,
    setIsLogged: (isLogged: boolean) => void
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
    const storage = getStorage();
    const [isLogged, setIsLogged] = useState<boolean>(false);

    useEffect(() => {
        if (storage) {
            const { login } = JSON.parse(storage)
            setIsLogged(login)
        }
    }, [storage])

    return (
        <AppContext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </AppContext.Provider>
    )
}