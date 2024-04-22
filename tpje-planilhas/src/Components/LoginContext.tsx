import { createContext, useContext } from "react";
import { AppContext } from "./AppContext";
import { validateUser } from "../Services/ValidateUser";
import { changeStorage } from "../Services/Storage";
import { useNavigate } from "react-router-dom";

interface ILogin {
    login: (id: string, password: string) => void
    logout: () => void
}
export const LoginContext = createContext({} as ILogin);

export const LoginContextProvider = ({ children }: any) => {
    const { setIsLogged } = useContext(AppContext);
    const navigate = useNavigate();

    const login = async (id: string, password: string): Promise<void> => {
        const isLogged = await validateUser(id, password);

        if (!isLogged) {
            return alert("Invalid credentials");
        }

        setIsLogged(true);
        changeStorage({ login: true })
        navigate("/lawyer")
    }

    const logout = async (): Promise<void> => {
        setIsLogged(false)
        changeStorage({ login: false })
        navigate("/")
    }

    return (
        <LoginContext.Provider value={{ login, logout }}>
            {children}
        </LoginContext.Provider>
    )
}