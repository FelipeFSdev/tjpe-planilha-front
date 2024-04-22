import { Grid, GridItem, FormControl, FormLabel, Input, FormHelperText, RadioGroup, HStack, Radio, Select, Box, SimpleGrid, Button, Text } from "@chakra-ui/react"

export const LawyerForm = () => {
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
                <FormControl padding="5px" as="fieldset">
                    <SimpleGrid columns={3} >
                        <Box>
                            <FormLabel fontSize="xl">NPU</FormLabel>
                            <Input placeholder="Ex: 0000000-00.0000.0.00.0000" width="78%" maxLength={20} />
                            <FormHelperText>Informar apenas números, sem utilizar barras, traços ou hífen</FormHelperText>
                        </Box>
                        <Box>
                            <FormLabel fontSize="xl"> Útilma tarefa </FormLabel>
                            <Input type="text" width="78%"></Input>
                        </Box>
                        <Box>
                            <FormLabel fontSize="xl"> Dias Parados </FormLabel>
                            <Input type="text" width="78%"></Input>
                        </Box>
                    </SimpleGrid>
                    <SimpleGrid columns={2} width="66.5%">
                        <Box>
                            <FormLabel paddingTop="5px" fontSize="xl" > Diretoria </FormLabel>
                            <Input type='text' width="78.3%" />
                        </Box>
                        <Box >
                            <FormLabel paddingTop="5px" fontSize="xl" > Unidade </FormLabel>
                            <Input type='text' width="78.3%" />
                        </Box>
                    </SimpleGrid>
                    <SimpleGrid columns={3}>
                        <Box display="flex" alignItems="center">
                            <FormLabel paddingTop="5px" fontSize="xl"> Tipo de Documento </FormLabel>
                            <RadioGroup paddingRight="10px">
                                <HStack spacing="10px">
                                    <Radio value="cnpj" fontWeight="bold"> CNPJ </Radio>
                                    <Radio value="cpf"> CPF </Radio>
                                    <Radio value="oab"> OAB </Radio>
                                </HStack>
                            </RadioGroup>
                        </Box>
                        <Box>
                            <FormLabel paddingTop="5px" fontSize="xl"> Documento Solicitante</FormLabel>
                            <Input type='number' width="78%" />
                            <FormHelperText>Informar apenas números, sem utilizar barras, traços ou hífen</FormHelperText>
                        </Box>
                        <Box>
                            <FormLabel paddingTop="5px" fontSize="xl" > Nome do solicitante </FormLabel>
                            <Input type='text' width="78%" />
                        </Box>
                    </SimpleGrid>
                    <SimpleGrid columns={2} width="66.5%">
                        <Box>
                            <FormLabel paddingTop="5px" fontSize="xl">Direcionamento da demanda</FormLabel>
                            <Select width="78.3%" placeholder="Selecione uma opção">
                                <option>Diretoria</option>
                                <option>Supervisor (diretoria)</option>
                                <option>Unidade</option>
                                <option>Unidade Secretaria</option>
                            </Select>
                        </Box>
                        <Box>
                            <FormLabel paddingTop="5px" fontSize="xl" justifySelf="center" > ID do Documento </FormLabel>
                            <Input type='text' width="30%" />
                        </Box>
                    </SimpleGrid>
                    <SimpleGrid columns={3}>
                        <Box>
                            <FormLabel paddingTop="5px" fontSize="xl">Demanda para cumprimento</FormLabel>
                            <Select width="78%" placeholder="Selecione uma opção">
                                <option>Diretoria</option>
                                <option>Supervisor (diretoria)</option>
                                <option>Unidade</option>
                                <option>Unidade Secretaria</option>
                            </Select>
                        </Box>
                        <Box >
                            <FormLabel paddingTop="5px" fontSize="xl" > Complemento </FormLabel>
                            <Input type='text' width="78%" />
                        </Box>
                        <Box>
                            <FormLabel paddingTop="5px" fontSize="xl" > Prioridade </FormLabel>
                            <Input type='text' width="78%" />
                        </Box>
                    </SimpleGrid>
                </FormControl>
                <Button backgroundColor="#f4970b" color="#FFFFFF" colorScheme="orange"
                    borderRadius="0px" margin="23px 5px"
                    type="submit">
                    <Text> Incluir solicitação </Text>
                </Button>
            </GridItem>
        </Grid >
    )
}