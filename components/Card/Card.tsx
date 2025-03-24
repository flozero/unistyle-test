import { PropsWithChildren } from "react"
import { View } from "react-native"
import { StyleSheet } from "react-native-unistyles"

export const Card: React.FC<PropsWithChildren> = ({
    children
}) => {
    CardStyle.useVariants({
        hasBorder: "cat"
    })

    return (
        <View style={CardStyle.container}>
            {children}
        </View>
    )
}

const CardStyle = StyleSheet.create((theme, rt) => ({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: theme.radius.box,
        variants: {
            hasBorder: {
                "cat": {
                    borderWidth: 2,
                    borderColor: "red",
                },
                default: {
                    borderWidth: 2,
                    borderColor: "red",
                }
            }
        }
    }
}))