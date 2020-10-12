import React, { useReducer } from 'react'
import { View, Text, Button } from 'react-native'

const initialState = { count: 0 }

function reducer(state, action) {
    switch (action.type) {
        case 'inc':
            return { count: state.count + 1 }
        default:
            return { count: state.count }
    }
}

export default function App() {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    )

    return (
        <View>
            <Text>{state.count}</Text>
            <Button
                title="Press me"
                onPress={() => dispatch({ type: 'inc' })}
            ></Button>
        </View>
    )
}
