import { View, Text } from 'react-native'
import React from 'react'

const ConditionalComponent = ({isValid}: {isValid: boolean}) => {
    return isValid ? <Text>ValidPassword</Text> : <Text>InValidPassword</Text>;
}
export default ConditionalComponent