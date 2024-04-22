import { Box, Center, Image, Input, Text } from "@chakra-ui/react"
import { Card } from "../Components/Card"
import { LoginButton } from "../Components/LoginButton"
import { useContext, useState } from "react"
import { LoginContext } from "../Components/LoginContext"

export const Home = () => {
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { login } = useContext(LoginContext)

    function idHandleChange(event: any) {
        setId(event.target.value)
    }
    function passwordHandleChange(event: any) {
        setPassword(event.target.value)
    }

    return (
        <Box padding="3% 10%" height="100vh" backgroundSize="cover" bgImage="https://www.tjpe.jus.br/rhsso/resources/46wlx/login/tjpe/img/tjpe.jpg">
            <Center>
                <Card>
                    <Center>
                        <Text fontSize="2xl" fontWeight="bold"
                            color="#FFFFFF">
                            Faça login
                        </Text>
                    </Center>
                    <Input margin="2% 0% 1%" backgroundColor="#FFFFFF"
                        placeholder="identificação advgd" value={id} onChange={idHandleChange} />
                    <Input backgroundColor="#FFFFFF" type="password"
                        placeholder="senha advgd" value={password} onChange={passwordHandleChange} />
                    <Box display="grid">
                        <LoginButton onClick={() => login(id, password)} />
                    </Box>
                </Card>
            </Center>
        </Box>
    )
}