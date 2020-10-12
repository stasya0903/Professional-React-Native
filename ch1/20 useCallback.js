import React, { memo, useCallback, useState } from 'react'
import { View, Button } from 'react-native'

const BigList = memo(({ items, handlePress }) => {
    console.log('rendering')
    const map = (item, index) => (
        <Button
            title={item}
            onPress={() => handlePress(index)}
        ></Button>
    )

    return <View>{items.map(map)}</View>
})

const items = [1, 2, 3]
export default function App() {
    const [dummy, setDummy] = useState(0)
    const [dummy2, setDummy2] = useState(100)
    const handlePress = useCallback(
        item => console.log(`callback called on ${item}`),
        [dummy2]
    )

    return (
        <View>
            <Button
                title="Try to re-render"
                onPress={() => setDummy(dummy + 1)}
            ></Button>
            <Button
                title="Recreate callback"
                onPress={() => setDummy2(dummy2 + 1)}
            ></Button>
            <BigList
                items={items}
                handlePress={handlePress}
            ></BigList>
        </View>
    )
}
