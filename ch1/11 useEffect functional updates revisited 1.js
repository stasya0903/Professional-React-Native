import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

export default function App() {
    const [count, setCount] = useState(1)

    useEffect(() => {
        setTimeout(() => setCount(count + 1), 500)
    })

    useEffect(() => {
        setTimeout(() => setCount(count + 1), 1000)
    })

    console.log(count)

    return <View></View>
}
