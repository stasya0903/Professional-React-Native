import React from 'react'
import { CountContext } from './CountContext'
import Child from './Child'

export default function App() {
    return (
        <CountContext.Provider value={54}>
            <Child></Child>
        </CountContext.Provider>
    )
}
