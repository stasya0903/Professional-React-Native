import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

export default function App() {
    const [count, setCount] = useState(1)

    useEffect(() => {
        setCount(count + 1)
    }, [])

    useEffect(() => {
        setCount(count + 1)
    }, [])

    useEffect(() => {
        setCount(count + 1)
    }, [])

    console.log(count)

    return <View></View>
}
