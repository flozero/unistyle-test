import { Text, View } from "react-native"
import { StyleSheet } from "react-native-unistyles"

export const CardBody = ({
    text
}: {
    text: string
}) => {
    return (
        <View style={CardBodyStyle.container}>
            <Text style={CardBodyStyle.text}>{text}</Text>
        </View>
    )
}

const CardBodyStyle = StyleSheet.create((theme) => ({
    container: {
        display: 'flex',
        flexDirection: "column",
        gap: 2,
        padding: 1.5 * 16
    },
    text: {
        fontSize: 0.875 * 16,
    }
}))