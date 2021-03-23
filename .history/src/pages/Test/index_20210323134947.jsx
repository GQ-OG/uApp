import React, { useState, useEffect } from 'react'
import { useApp } from '../../stores/initialState/context'
import { useLocation } from 'react-router-dom'
import {
    query,
    useComponent
} from '@hooks'
// import HashComponent from '@components/hashComponents'
import {
    Button
} from 'antd-mobile'

const Test = (props) => {
    const [store] = useApp()
    const [flag, setFlag] = useState(false)
    const Com1 = useComponent(true)
    const Com2 = useComponent(flag)
    
    return (
        <>
        </>
    )
}

export default Test