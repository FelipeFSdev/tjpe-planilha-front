import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface ILoginButton {
    onClick: MouseEventHandler
}

export const LoginButton = ({ onClick }: ILoginButton) => {
    return (
        <Button backgroundColor="#2e5aac" color="#FFFFFF"
            marginTop="2%" colorScheme="blue"
            onClick={onClick}>
            Entrar
        </Button>
    )
}