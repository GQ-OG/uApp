import React, { useState, useEffect } from 'react'
import { useApp } from '../../stores/initialState/context'
import { useLocation } from 'react-router-dom'
import {
    query,
    HashComponent
} from '@hooks'
// import HashComponent from '@components/hashComponents'

const Test = (props) => {
    const [store] = useApp()
    const Com1 = HashComponent(true)
    console.log(HashComponent, "HashComponent", Com1())
    
    return (
        <>
            {Com1({
                content: (
                    <div>HHHHHHH</div>
                )
            })}
        </>
    )
}

export default Test