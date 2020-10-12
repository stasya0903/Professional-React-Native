import React, { useState } from 'react'
import { View, Button, Text } from 'react-native'

const Children = props => {
    console.log('Children rendering')
    return <Text>{props.title}</Text>
}

export default function App() {
    const [count, setCount] = useState(0)

    return (
        <View>
            <Button
                title="Press me"
                onPress={() => setCount(count + 1)}
            ></Button>
            <Children title="I'm re-rendering unnecessarily"></Children>
        </View>
    )
}
