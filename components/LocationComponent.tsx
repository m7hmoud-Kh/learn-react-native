import { View, Text, FlatList } from 'react-native'
import React from 'react'

interface Location {
    id: number,
    name: string,
    country: string
}
const LocationComponent = () => {
    const location = [
        {
            id: 1,
            name: "london",
            country: "English"
        },
        {
            id: 2,
            name: "paris",
            country: "france"
        },
        {
            id: 3,
            name: "assuit",
            country: "Egypt"
        },
        {
            id: 4,
            name: "new Badr",
            country: "Naser City"
        }
    ]
    const render = ({item}: {item: Location}) => {
        return (
            <View>
                <Text>Name: {item.name}</Text>
                <Text>country: {item.country}</Text>
            </View>
        );
    }

  return (
    <View>
        <FlatList data={location} keyExtractor={({id, name}) => id.toString()}
        renderItem={render} />
    </View>
  )
}

export default LocationComponent