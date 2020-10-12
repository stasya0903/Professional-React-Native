import React, { useState, useEffect } from 'react'
import { View, Button } from 'react-native'

export default function App() {
    const [obj, setObj] = useState({})

    useEffect(() => {
        console.log('running effect')
    })

    console.log('rendering')

    return (
        <View>
            <Button
                title="Press me"
                onPress={() => setObj({})}
            />
        </View>
    )
}
