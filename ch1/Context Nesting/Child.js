import React, { useContext } from 'react'
import { Text } from 'react-native'
import { CountContext } from './CountContext'
import DeepChild from './DeepChild'

export default function Child() {
    const val = useContext(CountContext)

    return (
        <CountContext.Provider value={1}>
            <Text>Context Value: {val}</Text>
            <DeepChild></DeepChild>
        </CountContext.Provider>
    )
}
