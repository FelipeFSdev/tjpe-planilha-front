import { Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Lawyer } from "./Pages/Lawyer"
import { useContext } from "react"
import { AppContext } from "./Components/AppContext"
import { ServerForm } from "./Components/ServerForm"

export const MainRoutes = () => {
    const { isLogged } = useContext(AppContext);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lawyer" element={isLogged ? <Lawyer /> : <Home />} />
            <Route path="/server" element={isLogged ? <ServerForm /> : <Home />} />
        </Routes>
    )
}