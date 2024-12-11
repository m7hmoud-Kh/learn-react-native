import { View, Text, Button, StyleSheet, Pressable, TextInput, FlatList, ListRenderItem, TouchableOpacity } from 'react-native'
import React, { useReducer, useState } from 'react'

interface Todo {
    id: string,
    title: string
}

interface State {
    todos: Todo[]
}

interface RemoveTodoAction {
    type: 'REMOVE_TODO',
    payload: string
}

interface AddTodoAction {
    type: 'ADD_TODO',
    payload: string
}

type Action = AddTodoAction | RemoveTodoAction



interface TodoItemProps {
    item : Todo
}

const initalState : State = {todos: []}



const reducer = (state: State, action: Action): State =>
{
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [
                    ...state.todos,
                    {id: Date.now().toString(), title: action.payload}
                ]
            }
        case 'REMOVE_TODO':
            return {
                todos: state.todos.filter(f => f.id !== action.payload)
            }
    }
}
const TodoListComponent = () => {
    const [text, setText] = useState('')
    const [state, dispatch] = useReducer(reducer, initalState);

    const addTask = () => {
        if(text.trim()){
            dispatch({type: 'ADD_TODO', payload: text})
            setText('')
        }
    }

    const renderTodo = ({ item }: TodoItemProps) => (
        <Pressable onPress={() => removeTodo(item.id)}>
            <Text style={style.textStyle}>{item.title}</Text>
        </Pressable>
    );

    const removeTodo = (id: string) => dispatch({type: 'REMOVE_TODO', payload: id})

    return (
        <View>
            <Text>Task Name Khairy: </Text>
            <TextInput value={text}
                onChangeText={setText}
                placeholder='Add New Task'
                returnKeyType='done'
            />
            <Button  title='Add' onPress={addTask}/>

            { state.todos.length > 0 &&
                <FlatList data={state.todos}
                keyExtractor={(item) => item.id}
                renderItem={renderTodo}
                />
            }
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
        padding:5,
        margin:10
    },
    titleStyle: {
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: "bold"
    }
})
export default TodoListComponent

