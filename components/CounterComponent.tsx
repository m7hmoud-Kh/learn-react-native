import { View, Text, Button, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

const CounterComponent = () => {
    const [count, setCount] = useState(0)
    return (
        <View>
            <Text  style={style.titleStyle}>Counter : {count}</Text>
            <View style={style.container}>
                <Pressable style={style.buttonStyle} onPress={() => {setCount(count + 1)}} >
                    <Text style={style.textStyle}>Increment</Text>
                </Pressable>
                <Pressable style={style.buttonStyle} onPress={() => {setCount(count - 1)}} >
                    <Text style={style.textStyle}>Decrement</Text>
                </Pressable>
            </View>

        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    buttonStyle: {
        flex: 1,

    },
    textStyle: {
        backgroundColor:'blue',
        color: 'white',
        width:150,
        textAlign:'center',
        borderRadius:8,
        padding:10
    },
    titleStyle: {
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: "bold"
    }
})
export default CounterComponent

