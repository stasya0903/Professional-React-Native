import React, { useState } from 'react'
import { View, Button } from 'react-native'

export default function App() {
    const [state, setState] = useState({
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
