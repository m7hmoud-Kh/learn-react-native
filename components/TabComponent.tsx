import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TabComponent = ({text}:{text: string}) => {
    return (
        <View style={style.container}>
            <Text>{text}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
        margin:10,
        borderRadius:5,
        width: '80%',
    }
})

export default TabComponent