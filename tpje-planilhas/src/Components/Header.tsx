import { Box, Button, Grid, GridItem, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { LoginContext } from "./LoginContext"
import { HamburgerIcon, QuestionIcon, ExternalLinkIcon } from "@chakra-ui/icons"
import { api } from "../api"
import { CardInfo } from "./CardInfo"

interface IUserData {
    id: string,
    cod_auth: number,
    nome: string
    matricula: string
    cargo: string
    password: string
}

export const Header = () => {
    const [userData, setUserData] = useState<null | IUserData>();
    const { logout } = useContext(LoginContext);

    useEffect(() => {
        const getLawyer = async () => {
            const data: any | IUserData = await api
            setUserData(data)
        }
        getLawyer()
    })

    return (
        <Grid
            templateAreas={`"header header"
                  "nav main"
                  "footer footer"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'0vh 8fr'}
            h="0px"
            gap='1'
            color='blackAlpha.700'
        >
            <GridItem pl='2' bg="#2e5aac" area={'header'}
                padding="5px 3px" display="flex" alignItems="center">
                <Menu>
                    <MenuButton as={IconButton} aria-label="Options"
                        icon={<HamburgerIcon color="#FFFFFF" boxSize="25px" />} variant="filled" />
                    <MenuList boxSize="30vh" height="60vh">
                        <MenuItem icon={<QuestionIcon boxSize="23%" marginTop="10px" />} display="block">
                            <SimpleGrid columns={1} justifyItems="center">
                                {userData === undefined || userData === null ?
                                    (
                                        <Spinner color="#2e5aac" />
                                    ) :
                                    (
                                        <>
                                            <CardInfo content={`${userData?.nome}`} />
                                            <CardInfo content={`${userData?.matricula}`} />
                                            <CardInfo content={`${userData?.cargo}`} />
                                        </>
                                    )
                                }
                            </SimpleGrid>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem as="a" href="/"
                            icon={<ExternalLinkIcon boxSize="23px" />}>
                            <Text paddingLeft="8px" fontWeight='bold'> Início</Text>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem as="a" href="/lawyer"
                            icon={<ExternalLinkIcon boxSize="23px" />}>
                            <Box display="flex">
                                <Text paddingLeft="8px" fontWeight='bold'> Demandas </Text>
                                <Text paddingLeft="8px" opacity="0.7">(Solicitação) </Text>
                            </Box>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem icon={<ExternalLinkIcon boxSize="23px" />}>
                            <Box display="flex">
                                <Text paddingLeft="8px" fontWeight='bold'> Diretorias </Text>
                                <Text paddingLeft="8px" opacity="0.7">(Consulta) </Text>
                            </Box>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem icon={<ExternalLinkIcon boxSize="23px" />}>
                            <Box display="flex">
                                <Text paddingLeft="8px" fontWeight='bold'> Unidade Gabinete </Text>
                                <Text paddingLeft="8px" opacity="0.7">(Consulta) </Text>
                            </Box>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem icon={<ExternalLinkIcon boxSize="23px" />}>
                            <Box display="flex">
                                <Text paddingLeft="8px" fontWeight='bold'> Unidade Secretaria </Text>
                                <Text paddingLeft="8px" opacity="0.7">(Consulta) </Text>
                            </Box>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem as={Button} icon={<ExternalLinkIcon boxSize="23px" />} onClick={logout}>
                            <Text paddingLeft="8px" fontWeight='bold'> Sair </Text>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Text color="#FFFFFF" padding="5px"> Sicor</Text>
            </GridItem>
        </Grid>
    )
}
