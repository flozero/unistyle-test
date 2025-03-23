import { PropsWithChildren } from "react"
import { View } from "react-native"
import { StyleSheet } from "react-native-unistyles"

export const Card: React.FC<PropsWithChildren> = ({
    children
}) => {
    CardStyle.useVariants({
        hasBorder: "cat"
    })

    console.log(CardStyle.container) // does not contain borders

    return (
        <View style={CardStyle.container}>
            {children}
        </View>
    )
}

// why this works ?
// const CardStyle = StyleSheet.create({
//     container: {
//         position: 'relative',
//         display: 'flex',
//         flexDirection: 'column',
//         borderRadius: theme.radius.box,
//         // borderWidth: 2, // uncomment this will work but its not what we want here
//         // borderColor: "black",
//         variants: {
//             hasBorder: {
//                 "cat": {
//                     borderWidth: 2,
//                     borderColor: "black",
//                 }
//             }
//         }
//     }
// })

const CardStyle = StyleSheet.create((theme, rt) => ({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: theme.radius.box,
        // borderWidth: 2, // uncomment this will work but its not what we want here
        // borderColor: "black",
        variants: {
            hasBorder: {
                "cat": {
                    borderWidth: 2,
                    borderColor: "black",
                }
            }
        }
    }
}))