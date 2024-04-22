import { Box } from "@chakra-ui/react"
import { Header } from "./Header"
import { useContext } from "react"
import { AppContext } from "./AppContext"

export const Layout = ({ children }: any) => {
    const { isLogged } = useContext(AppContext);
    return (
        <Box minHeight="100vh" backgroundColor="#e6e6e6">
            {isLogged && <Header />}
            {children}
        </Box>
    )
}
