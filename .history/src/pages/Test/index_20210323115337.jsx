import React, { useState, useEffect } from 'react'
import { useApp } from '../../stores/initialState/context'
import { useLocation } from 'react-router-dom'
import {
    query,
    HashComponent
} from '@hooks'

const Test = (props) => {
    const [store] = useApp()
    const [Com1] = HashComponent(true)
    console.log(Com1, "Com1")
    console.log(query)
    return (
        <>
            {Com1({
                content: (
                    <>111222</>
                )
            })}
        </>
    )
}

export default Test