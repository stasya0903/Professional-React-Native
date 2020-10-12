import React, { useState } from 'react'
import { View, Button } from 'react-native'

const useLegacyState = initialState => {
    const [state, setState] = useState(initialState)
    const setLegacyState = object =>
        setState(state => ({ ...state, ...object }))

    return [state, setLegacyState]
}

export default function App() {
    const [state, setState] = useLegacyState({
        age: 18,
        count: 1,
    })
    console.log(state)

    return (
        <View>
            <Button
                title="Press me"
                onPress={() => setState({ age: 20 })}
            ></Button>
        </View>
    )
}
