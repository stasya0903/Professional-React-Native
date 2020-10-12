import React, { useMemo, useState } from 'react'
import { Button } from 'react-native'

export default function App() {
    const dep = 1
    const [count, setCount] = useState(0)
    const memoized = useMemo(() => {
        console.log('Memoizing value: 2')
        return 2
    }, [dep])
    console.log('Rendering')

    return (
        <Button
            title="Press me"
            onPress={() => setCount(count + 1)}
        ></Button>
    )
}
