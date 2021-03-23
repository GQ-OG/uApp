import React, { useState, useEffect } from 'react'
import { useApp } from '../../stores/initialState/context'
import { useLocation } from 'react-router-dom'
import {
    query,
    useComponent
} from '@hooks'
// import HashComponent from '@components/hashComponents'

const Test = (props) => {
    const [store] = useApp()
    const Com1 = useComponent(true)
    const Com2 = useComponent(false)
    console.log(useComponent, "HashComponent", Com1())
    
    return (
        <>
            <Com2
            content={(
                <>111111</>
            )}
            />
        </>
    )
}

export default Test