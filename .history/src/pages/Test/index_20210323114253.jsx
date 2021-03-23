import React, { useState, useEffect } from 'react'
import { useApp } from '../../stores/initialState/context'
import { useLocation } from 'react-router-dom'
import {
    query,
    HashComponent
} from '@hooks'

const Test = (props) => {
    const [store] = useApp()
    console.log(query)
    return (
        <>
        </>
    )
}

export default Test