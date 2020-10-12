import React, { useContext } from 'react'
import { Text } from 'react-native'
import { CountContext } from './CountContext'

export default function DeepChild() {
    const val = useContext(CountContext)

    return <Text>Context Value: {val}</Text>
}
