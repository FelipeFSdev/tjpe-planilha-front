import {
    GridItem, FormControl, SimpleGrid, FormLabel,
    Input, FormHelperText, RadioGroup, HStack,
    Radio, Select, Button, Box, Text, Grid
} from "@chakra-ui/react"

export const ServerForm = () => {
    return (
        <Grid
            templateAreas={`
            "header header"
            "nav main"
            "footer footer"
        `}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'0vh 1fr'}
            h='200px'
            gap='1'
            color='blackAlpha.700'
        >

            <GridItem pl='2' bg="#FFFFFF" area={'main'} height="60vh" padding="5px" >
                <FormControl padding="5px" as="fieldset" aria-label="Options">
                    <FormLabel paddingTop="5px" fontSize="xl" > Diretoria </FormLabel>
                    <Select width="32%" placeholder="Diretoria">
                        <option> Opção um </option>
                        <option> Opção dois </option>
                        <option> Opção três </option>
                    </Select>
                    <FormLabel paddingTop="5px" fontSize="xl"> Unidade </FormLabel>
                    <Select width="32%" placeholder="Unidade">
                        <option> Opção um </option>
                        <option> Opção dois </option>
                        <option> Opção três </option>
                    </Select>
                    <FormLabel paddingTop="5px" fontSize="xl"> Supervisor/Diretoria </FormLabel>
                    <Select width="32%" placeholder="Supervisor/Diretoria">
                        <option> Opção um </option>
                        <option> Opção dois </option>
                        <option> Opção três </option>
                    </Select>
                    <FormLabel fontSize="xl">NPU</FormLabel>
                    <Input placeholder="Ex: 0000000-00.0000.0.00.0000" width="32%" maxLength={20} />
                    <FormHelperText>Informar apenas números, sem utilizar barras, traços ou hífen </FormHelperText>
                    <FormLabel paddingTop="5px" fontSize="xl"> Período da Solicitação </FormLabel>
                    <SimpleGrid columns={2} spacing="7px" width="32%">
                        <Box>
                            <FormLabel fontSize="xl"> Data de início </FormLabel>
                            <Input type="date"></Input>
                        </Box>
                        <Box>
                            <FormLabel fontSize="xl"> Data final </FormLabel>
                            <Input type="date"></Input>
                        </Box>
                    </SimpleGrid>
                    <Button backgroundColor="#f4970b" color="#FFFFFF" colorScheme="orange"
                        borderRadius="0px" margin="23px 5px"
                        type="submit">
                        <Text> Incluir solicitação </Text>
                    </Button>
                </FormControl>
            </GridItem>
        </Grid>
    )
}