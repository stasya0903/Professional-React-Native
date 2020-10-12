import React, { useContext, memo } from 'react'
import DeepChild from './DeepChild'

export default memo(function Child(props) {
    console.log('Child rendering')

    return <DeepChild></DeepChild>
})
