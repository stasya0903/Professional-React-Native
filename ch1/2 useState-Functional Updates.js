import React, { useState } from 'react'
import { View, Button } from 'react-native'

export default function App() {
    const [age, setAge] = useState(18)
    console.log(age)

    return (
        <View>
            <Button
                title="Press me"
                onPress={() =>
                    setAge(prevAge => prevAge + 1)
                }
            ></Button>
        </View>
    )
}
