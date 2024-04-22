import { Box } from "@chakra-ui/react"

export const Card = ({ children }: any) => {
    return (
        <Box
            backgroundColor="#808080" opacity="0.95"
            borderRadius="10px" padding="15px"
            maxHeight="27vh" maxWidth="110vh"
        >
            {children}
        </Box>
    )
}