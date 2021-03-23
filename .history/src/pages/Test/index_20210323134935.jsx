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
    console.log(useComponent, "HashComponent", Com1())
    
    return (
        <>
            <Com2
            content={(
                <>111111</>
            )}
            />
            <Button
            onClick={() => {

            }}
            >111111</Button>
        </>
    )
}

export default Test