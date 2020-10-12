import React, { useRef } from 'react'
import { View, Button, TextInput } from 'react-native'

export default function App() {
    const inputRef = useRef(null)

    return (
        <View>
            <Button
                title="Press me"
                onPress={() => inputRef.current.clear()}
            ></Button>
            <TextInput
                ref={inputRef}
                value="Some Text"
            ></TextInput>
        </View>
    )
}
