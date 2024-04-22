import { Text } from "@chakra-ui/react"

interface ICardInfo {
    content: string
}

export const CardInfo = ({ content }: ICardInfo) => {
    return (
        <>
            <Text> {content} </Text>
        </>
    )
}