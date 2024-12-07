import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const FlatListComponent = () => {
const furit = ['banan', 'orange', 'apple'];

  return (
    <FlatList data={furit}
    keyExtractor={(item,index ) => index.toString()}
    renderItem={({item}) => <Text style={style.titleStyle}>{item}</Text>} />
  )
}

export default FlatListComponent


const style = StyleSheet.create({
    titleStyle: {
      fontSize:20,
      marginVertical:5,
      textAlign:"center",
      backgroundColor: 'black',
      color: 'white',
      padding: 10
    },
  })