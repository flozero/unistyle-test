import { View } from "react-native"
import { StyleSheet } from "react-native-unistyles"

export const CardActions = ({
    children
}) => {
    return (
        <View style={CardStyle.container}>
            {children}
        </View>
    )
}

const CardStyle = StyleSheet.create((theme) => ({
    container: {
        display: 'flex',
        flexWrap: "wrap",
        "alignItems": "flex-start",
        gap: 2
    }
}))