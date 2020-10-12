import React, { useContext } from 'react'
import { Text } from 'react-native'
import { CountContext } from './CountContext'

export default function DeepChild() {
    const val = useContext(CountContext)
    console.log('DeepChild rendering')

    return <Text>Context Value: {val}</Text>
}
