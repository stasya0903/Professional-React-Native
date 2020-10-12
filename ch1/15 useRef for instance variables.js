import React, { useRef } from 'react'
import { View, Button } from 'react-native'

export default function App() {
    const ref = useRef(0)
    console.log('rendering')

    return (
        <View>
            <Button
                title="Press me"
                onPress={() => {
                    ref.current += 1
                    console.log(ref.current)
                }}
            ></Button>
        </View>
    )
}
