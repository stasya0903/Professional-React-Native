import React, { useState, useEffect } from 'react'
import { View, Button } from 'react-native'

export default function App() {
    const [obj, setObj] = useState({ num: 1 })
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('running effect')
        return () => console.log('cleaning up')
    }, [])

    console.log('rendering')

    return (
        <View>
            <Button
                title="Press me"
                onPress={() => {
                    setObj({ num: 1 })
                    setCount(count + 1)
                }}
            />
        </View>
    )
}
