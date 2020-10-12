import React, { useState } from 'react'
import { View, Button, Text } from 'react-native'

export default function App() {
    const [age, setAge] = useState(0)

    return (
        <View>
            <Button
                title="Grow up"
                onPress={() => setAge(age + 1)}
            />
            <Text>{age}</Text>
        </View>
    )
}
