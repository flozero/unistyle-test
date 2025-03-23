import { Text, View } from "react-native"
import { StyleSheet } from "react-native-unistyles"

export const CardTitle = ({
    text
}: {
    text: string
}) => {
    return (
        <View style={CardStyle.container}>
            <Text style={CardStyle.Cardtitle}>{text}</Text>
        </View>
    )
}

const CardStyle = StyleSheet.create((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: 2,
    },
    Cardtitle: {
        fontSize: 1.125 * 16,
        fontWeight: "600"
    }
}))