import React, { useState } from 'react'
import { Button } from 'react-native'
import { CountContext } from './CountContext'
import Child from './Child'

export default function App() {
    const [count, setCount] = useState(0)

    return (
        <CountContext.Provider value={count}>
            <Button
                title="Press me"
                onPress={() => setCount(count + 1)}
            ></Button>
            <Child title="Fixed"></Child>
        </CountContext.Provider>
    )
}
