import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

interface Profile {
    id: string,
    name: string,
    age: string
}

const UpdateProfile = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [profile, setProfile] = useState<Profile[]>([])
    const [editingItem, setEditingItem] = useState<null| String>()

    const handleAddProfile = () => {
        if(name.trim() && Number(age)){
            setProfile([...profile, {id: Date.now().toString(), name, age}])
            setName('')
            setAge('')
        }
    }

    const removeProfile = (id: String) => {
        setProfile(profile.filter(f => f.id != id))
    }

    const handleUpdateProfile = () =>
    {
        setProfile(profile.map(p => {
            return p.id == editingItem ? {...p, age, name} : p
        }))
        setEditingItem(null)
        setName('')
        setAge('')
    }

    const renderUserProfile = ({item}: {item: Profile}) => {
        return (
            <View style={styleSheet.containerStyle}>
                <View style={styleSheet.textView}>
                    <Text>Name: {item.name}</Text>
                    <Text>age: {item.age}</Text>
                </View>

                <TouchableOpacity style={styleSheet.actionView} onPress={() => removeProfile(item.id)}>
                    <Text style={styleSheet.textDanger}>Remove</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styleSheet.actionView} onPress={() => {
                    setName(item.name)
                    setAge(item.age)
                    setEditingItem(item.id)
                }}>
                <Text style={styleSheet.textUpdate}>Udate</Text>
                </TouchableOpacity>
            </View>
        )
    }
  return (
    <View>
        <Text>Name: </Text>
        <TextInput value={name}  onChangeText={setName} placeholder='Type Your Name' />
        <Text>Age: </Text>
        <TextInput  value={age} onChangeText={setAge} placeholder='type Your age' />

        {editingItem ? (
            <Button title='Update Profile' onPress={handleUpdateProfile}/>
        ): (
            <Button title='Add Profile' onPress={handleAddProfile}/>
        )}


        <FlatList data={profile} keyExtractor={(item) => item.id} renderItem={renderUserProfile}/>
    </View>  )
}


const styleSheet = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
    },

    textView: {
        flex: 1
    },
    actionView: {
        flex: 1,
        flexDirection: 'row'
    },
    textDanger: {
        color: 'red',
        flex: 1
    },
    textUpdate: {
        color:'blue',
        flex: 2
    }
})

export default UpdateProfile